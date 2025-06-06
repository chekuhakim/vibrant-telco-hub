
import { useState } from 'react';
import { toast } from "sonner";
import { Cell, GameState } from './types';
import { initializeBoard, updateSignalStrengths, calculateScore, findBestTowerPosition } from './gameUtils';

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
  
  const [showingBestPosition, setShowingBestPosition] = useState(false);

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
    
    // Check if game is complete - changed from 80 to 50
    if (newScore >= 50) {
      toast.success("Victory! The town thrives in harmony.");
      onGameComplete(true);
    } else {
      toast.error("The mayor is disappointed. Try a different location!");
      onGameComplete(false);
    }
    
    // Bonus: All houses and businesses have at least some signal
    const allConnected = boardWithSignals.flat().filter(cell => 
      (cell.type === 'house' || cell.type === 'business') && 
      (cell.signalStrength === 'good' || cell.signalStrength === 'weak')
    ).length === boardWithSignals.flat().filter(cell => 
      cell.type === 'house' || cell.type === 'business'
    ).length;
    
    if (allConnected) {
      toast.success("Bonus: All buildings connected! +30 points");
    }
  };

  const resetGame = () => {
    setGameState({
      board: initializeBoard(),
      towerPlaced: false,
      towerPosition: null,
      score: 0
    });
    setShowingBestPosition(false);
    onScoreUpdate(0);
    toast.info("Game reset! Place your tower strategically.");
  };
  
  const showBestPosition = () => {
    if (gameState.towerPlaced) {
      toast.info("You've already placed your tower. Reset the game to try again.");
      return;
    }
    
    const [bestRow, bestCol] = findBestTowerPosition(gameState.board);
    
    // Update the board to show the best position
    const newBoard = [...gameState.board];
    
    // If we're already showing best position, hide it
    if (showingBestPosition) {
      setShowingBestPosition(false);
      toast.info("Best position hint hidden.");
      setGameState({
        ...gameState,
        board: initializeBoard()
      });
      return;
    }
    
    // Otherwise, show the best position
    const boardWithSignals = updateSignalStrengths(newBoard, bestRow, bestCol);
    
    // Calculate what score would be achieved
    const potentialScore = calculateScore(boardWithSignals, bestRow, bestCol);
    
    setShowingBestPosition(true);
    setGameState({
      ...gameState,
      board: boardWithSignals
    });
    
    toast.success(`Best position hint: Row ${bestRow}, Col ${bestCol} with score ${potentialScore}`);
  };

  return {
    gameState,
    handleCellClick,
    resetGame,
    showBestPosition,
    showingBestPosition
  };
};
