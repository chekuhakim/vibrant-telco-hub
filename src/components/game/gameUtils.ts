
import { Cell } from "./types";

// Initialize the 10x10 game board
export const initializeBoard = (): Cell[][] => {
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
export const calculateDistance = (row1: number, col1: number, row2: number, col2: number): number => {
  return Math.abs(row1 - row2) + Math.abs(col1 - col2);
};

// Update signal strengths on the board based on tower placement
export const updateSignalStrengths = (boardState: Cell[][], towerRow: number, towerCol: number): Cell[][] => {
  const newBoard = JSON.parse(JSON.stringify(boardState)); // Deep clone
  
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
  
  return newBoard;
};

// Calculate the score based on tower placement
export const calculateScore = (boardState: Cell[][], towerRow: number, towerCol: number): number => {
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
          // Houses at good distance: +15 points (increased from 5)
          totalScore += 15;
          housesWithSignal++;
        }
      } else if (cellType === 'business') {
        totalBusinesses++;
        if (distance <= 3) {
          // Businesses close: +20 points (increased from 10)
          totalScore += 20;
          businessesWithSignal++;
        } else if (distance <= 6) {
          // Businesses at medium distance: +10 points (increased from 5)
          totalScore += 10;
          businessesWithSignal++;
        }
      }
    }
  }
  
  // Bonus: All houses and businesses have at least some signal
  const allConnected = housesWithSignal === totalHouses && businessesWithSignal === totalBusinesses;
  if (allConnected) {
    totalScore += 30; // Increased from 20
  }
  
  return totalScore;
};

// Find the optimal tower position
export const findBestTowerPosition = (board: Cell[][]): [number, number] => {
  let bestScore = -Infinity;
  let bestPosition: [number, number] = [0, 0];
  
  // Try every possible position
  for (let row = 0; row < 10; row++) {
    for (let col = 0; col < 10; col++) {
      // Skip if cell is not empty
      if (board[row][col].type !== 'empty') {
        continue;
      }
      
      const score = calculateScore(board, row, col);
      if (score > bestScore) {
        bestScore = score;
        bestPosition = [row, col];
      }
    }
  }
  
  return bestPosition;
};
