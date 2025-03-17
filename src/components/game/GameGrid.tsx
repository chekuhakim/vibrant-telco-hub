
import React from 'react';
import GridCell from './GridCell';
import { Cell } from './types';

interface GameGridProps {
  board: Cell[][];
  onCellClick: (row: number, col: number) => void;
}

const GameGrid: React.FC<GameGridProps> = ({ board, onCellClick }) => {
  return (
    <div className="grid grid-cols-10 gap-1 w-full max-w-lg aspect-square mb-4">
      {board.map((row, rowIndex) => (
        row.map((cell, colIndex) => (
          <GridCell 
            key={`${rowIndex}-${colIndex}`}
            type={cell.type}
            row={rowIndex}
            col={colIndex}
            signalStrength={cell.signalStrength}
            onClick={onCellClick}
          />
        ))
      ))}
    </div>
  );
};

export default GameGrid;
