
import React from 'react';
import { Button } from "@/components/ui/button";
import GameGrid from './GameGrid';
import { useGameState } from './useGameState';
import { GameBoardProps } from './types';

const GameBoard: React.FC<GameBoardProps> = ({ onScoreUpdate, onGameComplete }) => {
  const { gameState, handleCellClick, resetGame } = useGameState({ 
    onScoreUpdate, 
    onGameComplete 
  });

  return (
    <div className="flex flex-col items-center">
      <GameGrid 
        board={gameState.board} 
        onCellClick={handleCellClick} 
      />
      
      <Button 
        onClick={resetGame}
        className="px-4 py-2 bg-primary text-white rounded-md hover:bg-primary/80 transition-colors"
      >
        Reset Game
      </Button>
    </div>
  );
};

export default GameBoard;
