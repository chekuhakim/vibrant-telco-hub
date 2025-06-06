
import React from 'react';
import { Button } from "@/components/ui/button";
import GameGrid from './GameGrid';
import { useGameState } from './useGameState';
import { GameBoardProps } from './types';

const GameBoard: React.FC<GameBoardProps> = ({ onScoreUpdate, onGameComplete }) => {
  const { gameState, handleCellClick, resetGame, showBestPosition, showingBestPosition } = useGameState({ 
    onScoreUpdate, 
    onGameComplete 
  });

  return (
    <div className="flex flex-col items-center">
      <GameGrid 
        board={gameState.board} 
        onCellClick={handleCellClick} 
      />
      
      <div className="flex space-x-4 mb-4">
        <Button 
          onClick={resetGame}
          className="px-4 py-2 bg-primary text-white rounded-md hover:bg-primary/80 transition-colors"
        >
          Reset Game
        </Button>
        
        <Button 
          onClick={showBestPosition}
          variant="secondary"
          className="px-4 py-2 rounded-md transition-colors"
        >
          {showingBestPosition ? "Hide Hint" : "Show Best Position"}
        </Button>
      </div>
    </div>
  );
};

export default GameBoard;
