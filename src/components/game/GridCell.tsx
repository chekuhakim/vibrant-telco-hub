
import React from 'react';
import { House, Building2, TreePine, RadioTower } from 'lucide-react';

export type CellType = 'empty' | 'house' | 'business' | 'tree' | 'tower';
export type SignalStrength = 'none' | 'weak' | 'good' | 'too-close';

interface GridCellProps {
  type: CellType;
  row: number;
  col: number;
  signalStrength?: SignalStrength;
  onClick: (row: number, col: number) => void;
}

const GridCell: React.FC<GridCellProps> = ({ 
  type, 
  row, 
  col, 
  signalStrength = 'none',
  onClick 
}) => {
  const handleClick = () => {
    onClick(row, col);
  };

  // Signal strength background colors
  const signalBgColor = {
    'none': 'bg-gray-100',
    'weak': 'bg-yellow-100',
    'good': 'bg-green-100',
    'too-close': 'bg-red-100'
  };

  // Signal strength border colors
  const signalBorderColor = {
    'none': 'border-gray-200',
    'weak': 'border-yellow-300',
    'good': 'border-green-300',
    'too-close': 'border-red-300'
  };

  // Get cell content based on type
  const getCellContent = () => {
    switch (type) {
      case 'house':
        return <House className="w-6 h-6 text-purple-500" />;
      case 'business':
        return <Building2 className="w-6 h-6 text-orange-500" />;
      case 'tree':
        return <TreePine className="w-6 h-6 text-green-600" />;
      case 'tower':
        return <RadioTower className="w-6 h-6 text-primary" />;
      default:
        return null;
    }
  };

  return (
    <div 
      className={`
        w-full aspect-square border-2 ${signalBorderColor[signalStrength]} ${signalBgColor[signalStrength]}
        flex items-center justify-center cursor-pointer transition-all duration-200
        hover:bg-opacity-80 active:scale-95 pixel-borders
      `}
      onClick={handleClick}
      data-row={row}
      data-col={col}
      data-type={type}
    >
      {getCellContent()}
    </div>
  );
};

export default GridCell;
