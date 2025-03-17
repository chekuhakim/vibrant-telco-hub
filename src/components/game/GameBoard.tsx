
import React, { useState, useEffect } from 'react';
import GridCell, { CellType, SignalStrength } from './GridCell';
import { toast } from "sonner";

export interface Cell {
  type: CellType;
  signalStrength: SignalStrength;
}

interface GameBoardProps {
  onScoreUpdate: (score: number) => void;
  onGameComplete: (won: boolean) => void;
}

// Initialize the 10x10 game board
const initializeBoard = (): Cell[][] => {
  // Create an empty 10x10 grid
  const board: Cell[][] = Array(10).fill(null).map(() => 
    Array(10).fill(null).map(() => ({ 
      type: 'empty', 
      signalStrength: 'none' 
    }))
  );

  // Place houses (5)
  const houses = [
    [0, 3], [1, 9], [3, 0], [6, 2], [8, 8]
  ];
  
  // Place businesses (3)
  const businesses = [
    [1, 1], [3, 6], [7, 3]
  ];
  
  // Place trees (3)
  const trees = [
    [1, 5], [4, 2], [2, 4]
  ];
  
  // Set the items on the board
  houses.forEach(([row, col]) => {
    board[row][col].type = 'house';
  });
  
  businesses.forEach(([row, col]) => {
    board[row][col].type = 'business';
  });
  
  trees.forEach(([row, col]) => {
    board[row][col].type = 'tree';
  });
  
  return board;
};

// Calculate the Manhattan distance between two points
const calculateDistance = (row1: number, col1: number, row2: number, col2: number): number => {
  return Math.abs(row1 - row2) + Math.abs(col1 - col2);
};

const GameBoard: React.FC<GameBoardProps> = ({ onScoreUpdate, onGameComplete }) => {
  const [board, setBoard] = useState<Cell[][]>(initializeBoard());
  const [towerPlaced, setTowerPlaced] = useState<boolean>(false);
  const [towerPosition, setTowerPosition] = useState<[number, number] | null>(null);
  const [score, setScore] = useState<number>(0);

  const handleCellClick = (row: number, col: number) => {
    // If tower is already placed or cell is not empty, do nothing
    if (towerPlaced || board[row][col].type !== 'empty') {
      if (towerPlaced) {
        toast.info("Tower already placed! Reset to try again.");
      } else if (board[row][col].type === 'tree') {
        toast.error("Cannot place tower on a tree!");
      } else if (board[row][col].type === 'house' || board[row][col].type === 'business') {
        toast.error("Cannot place tower on buildings!");
      }
      return;
    }

    // Place the tower
    const newBoard = [...board];
    newBoard[row][col].type = 'tower';
    setBoard(newBoard);
    setTowerPlaced(true);
    setTowerPosition([row, col]);
    
    // Calculate signal strengths
    updateSignalStrengths(newBoard, row, col);
    
    // Calculate the score
    const newScore = calculateScore(newBoard, row, col);
    setScore(newScore);
    onScoreUpdate(newScore);
    
    // Check if game is complete
    if (newScore >= 80) {
      toast.success("Victory! The town thrives in harmony.");
      onGameComplete(true);
    } else {
      toast.error("The mayor is disappointed. Try a different location!");
      onGameComplete(false);
    }
  };

  const updateSignalStrengths = (boardState: Cell[][], towerRow: number, towerCol: number) => {
    const newBoard = [...boardState];
    
    // Update signal strength for each cell
    for (let row = 0; row < 10; row++) {
      for (let col = 0; col < 10; col++) {
        const distance = calculateDistance(row, col, towerRow, towerCol);
        const cellType = newBoard[row][col].type;
        
        if (cellType === 'house') {
          if (distance <= 2) {
            newBoard[row][col].signalStrength = 'too-close';
          } else if (distance <= 5) {
            newBoard[row][col].signalStrength = 'good';
          } else {
            newBoard[row][col].signalStrength = 'none';
          }
        } else if (cellType === 'business') {
          if (distance <= 3) {
            newBoard[row][col].signalStrength = 'good';
          } else if (distance <= 6) {
            newBoard[row][col].signalStrength = 'weak';
          } else {
            newBoard[row][col].signalStrength = 'none';
          }
        } else if (cellType === 'empty' || cellType === 'tree') {
          // Show signal strength on empty cells too
          if (distance <= 2) {
            newBoard[row][col].signalStrength = 'too-close';
          } else if (distance <= 4) {
            newBoard[row][col].signalStrength = 'good';
          } else if (distance <= 6) {
            newBoard[row][col].signalStrength = 'weak';
          } else {
            newBoard[row][col].signalStrength = 'none';
          }
        }
      }
    }
    
    setBoard(newBoard);
  };

  const calculateScore = (boardState: Cell[][], towerRow: number, towerCol: number): number => {
    let totalScore = 0;
    let housesWithSignal = 0;
    let totalHouses = 0;
    let businessesWithSignal = 0;
    let totalBusinesses = 0;
    
    for (let row = 0; row < 10; row++) {
      for (let col = 0; col < 10; col++) {
        const distance = calculateDistance(row, col, towerRow, towerCol);
        const cellType = boardState[row][col].type;
        
        if (cellType === 'house') {
          totalHouses++;
          if (distance <= 2) {
            // Houses too close: -10 points
            totalScore -= 10;
          } else if (distance <= 5) {
            // Houses at good distance: +5 points
            totalScore += 5;
            housesWithSignal++;
          }
        } else if (cellType === 'business') {
          totalBusinesses++;
          if (distance <= 3) {
            // Businesses close: +10 points
            totalScore += 10;
            businessesWithSignal++;
          } else if (distance <= 6) {
            // Businesses at medium distance: +5 points
            totalScore += 5;
            businessesWithSignal++;
          }
        }
      }
    }
    
    // Bonus: All houses and businesses have at least some signal
    if (housesWithSignal === totalHouses && businessesWithSignal === totalBusinesses) {
      totalScore += 20;
      toast.success("Bonus: All buildings connected! +20 points");
    }
    
    return totalScore;
  };

  const resetGame = () => {
    setBoard(initializeBoard());
    setTowerPlaced(false);
    setTowerPosition(null);
    setScore(0);
    onScoreUpdate(0);
    toast.info("Game reset! Place your tower strategically.");
  };

  return (
    <div className="flex flex-col items-center">
      <div className="grid grid-cols-10 gap-1 w-full max-w-lg aspect-square mb-4">
        {board.map((row, rowIndex) => (
          row.map((cell, colIndex) => (
            <GridCell 
              key={`${rowIndex}-${colIndex}`}
              type={cell.type}
              row={rowIndex}
              col={colIndex}
              signalStrength={cell.signalStrength}
              onClick={handleCellClick}
            />
          ))
        ))}
      </div>
      
      <button 
        onClick={resetGame}
        className="px-4 py-2 bg-primary text-white rounded-md hover:bg-primary/80 transition-colors"
      >
        Reset Game
      </button>
    </div>
  );
};

export default GameBoard;
