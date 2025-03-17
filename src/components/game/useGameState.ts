
import { useState } from 'react';
import { toast } from "sonner";
import { Cell, GameState } from './types';
import { initializeBoard, updateSignalStrengths, calculateScore } from './gameUtils';

interface UseGameStateProps {
  onScoreUpdate: (score: number) => void;
  onGameComplete: (won: boolean) => void;
}

export const useGameState = ({ onScoreUpdate, onGameComplete }: UseGameStateProps) => {
  const [gameState, setGameState] = useState<GameState>({
    board: initializeBoard(),
    towerPlaced: false,
    towerPosition: null,
    score: 0
  });

  const handleCellClick = (row: number, col: number) => {
    // If tower is already placed or cell is not empty, do nothing
    if (gameState.towerPlaced || gameState.board[row][col].type !== 'empty') {
      if (gameState.towerPlaced) {
        toast.info("Tower already placed! Reset to try again.");
      } else if (gameState.board[row][col].type === 'tree') {
        toast.error("Cannot place tower on a tree!");
      } else if (gameState.board[row][col].type === 'house' || gameState.board[row][col].type === 'business') {
        toast.error("Cannot place tower on buildings!");
      }
      return;
    }

    // Place the tower
    const newBoard = [...gameState.board];
    newBoard[row][col].type = 'tower';
    
    // Calculate signal strengths
    const boardWithSignals = updateSignalStrengths(newBoard, row, col);
    
    // Calculate the score
    const newScore = calculateScore(boardWithSignals, row, col);
    
    // Update the game state
    setGameState({
      board: boardWithSignals,
      towerPlaced: true,
      towerPosition: [row, col],
      score: newScore
    });
    
    onScoreUpdate(newScore);
    
    // Check if game is complete
    if (newScore >= 80) {
      toast.success("Victory! The town thrives in harmony.");
      onGameComplete(true);
    } else {
      toast.error("The mayor is disappointed. Try a different location!");
      onGameComplete(false);
    }
    
    // Bonus: All houses and businesses have at least some signal
    const allConnected = calculateScore(boardWithSignals, row, col) >= boardWithSignals.flat().filter(cell => 
      cell.type === 'house' || cell.type === 'business'
    ).length * 5;
    
    if (allConnected) {
      toast.success("Bonus: All buildings connected! +20 points");
    }
  };

  const resetGame = () => {
    setGameState({
      board: initializeBoard(),
      towerPlaced: false,
      towerPosition: null,
      score: 0
    });
    onScoreUpdate(0);
    toast.info("Game reset! Place your tower strategically.");
  };

  return {
    gameState,
    handleCellClick,
    resetGame
  };
};
