
import { CellType, SignalStrength } from "./GridCell";

export interface Cell {
  type: CellType;
  signalStrength: SignalStrength;
}

export interface GameState {
  board: Cell[][];
  towerPlaced: boolean;
  towerPosition: [number, number] | null;
  score: number;
}

export interface GameBoardProps {
  onScoreUpdate: (score: number) => void;
  onGameComplete: (won: boolean) => void;
}
