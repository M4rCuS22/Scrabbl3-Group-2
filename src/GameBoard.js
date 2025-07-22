import React from 'react';
import './GameBoard.css';

const GameBoard = () => {
  // Define special squares on the board
  const specialSquares = {
    // Triple Word Score
    '0,0': { type: 'tw', label: 'TW' },
    '0,7': { type: 'tw', label: 'TW' },
    '0,14': { type: 'tw', label: 'TW' },
    '7,0': { type: 'tw', label: 'TW' },
    '7,14': { type: 'tw', label: 'TW' },
    '14,0': { type: 'tw', label: 'TW' },
    '14,7': { type: 'tw', label: 'TW' },
    '14,14': { type: 'tw', label: 'TW' },
    
    // Double Word Score
    '1,1': { type: 'dw', label: 'DW' },
    '2,2': { type: 'dw', label: 'DW' },
    '3,3': { type: 'dw', label: 'DW' },
    '4,4': { type: 'dw', label: 'DW' },
    '10,10': { type: 'dw', label: 'DW' },
    '11,11': { type: 'dw', label: 'DW' },
    '12,12': { type: 'dw', label: 'DW' },
    '13,13': { type: 'dw', label: 'DW' },
    '1,13': { type: 'dw', label: 'DW' },
    '2,12': { type: 'dw', label: 'DW' },
    '3,11': { type: 'dw', label: 'DW' },
    '4,10': { type: 'dw', label: 'DW' },
    '10,4': { type: 'dw', label: 'DW' },
    '11,3': { type: 'dw', label: 'DW' },
    '12,2': { type: 'dw', label: 'DW' },
    '13,1': { type: 'dw', label: 'DW' },
    
    // Triple Letter Score
    '1,5': { type: 'tl', label: 'TL' },
    '1,9': { type: 'tl', label: 'TL' },
    '5,1': { type: 'tl', label: 'TL' },
    '5,5': { type: 'tl', label: 'TL' },
    '5,9': { type: 'tl', label: 'TL' },
    '5,13': { type: 'tl', label: 'TL' },
    '9,1': { type: 'tl', label: 'TL' },
    '9,5': { type: 'tl', label: 'TL' },
    '9,9': { type: 'tl', label: 'TL' },
    '9,13': { type: 'tl', label: 'TL' },
    '13,5': { type: 'tl', label: 'TL' },
    '13,9': { type: 'tl', label: 'TL' },
    
    // Double Letter Score
    '0,3': { type: 'dl', label: 'DL' },
    '0,11': { type: 'dl', label: 'DL' },
    '2,6': { type: 'dl', label: 'DL' },
    '2,8': { type: 'dl', label: 'DL' },
    '3,0': { type: 'dl', label: 'DL' },
    '3,7': { type: 'dl', label: 'DL' },
    '3,14': { type: 'dl', label: 'DL' },
    '6,2': { type: 'dl', label: 'DL' },
    '6,6': { type: 'dl', label: 'DL' },
    '6,8': { type: 'dl', label: 'DL' },
    '6,12': { type: 'dl', label: 'DL' },
    '7,3': { type: 'dl', label: 'DL' },
    '7,11': { type: 'dl', label: 'DL' },
    '8,2': { type: 'dl', label: 'DL' },
    '8,6': { type: 'dl', label: 'DL' },
    '8,8': { type: 'dl', label: 'DL' },
    '8,12': { type: 'dl', label: 'DL' },
    '11,0': { type: 'dl', label: 'DL' },
    '11,7': { type: 'dl', label: 'DL' },
    '11,14': { type: 'dl', label: 'DL' },
    '12,6': { type: 'dl', label: 'DL' },
    '12,8': { type: 'dl', label: 'DL' },
    '14,3': { type: 'dl', label: 'DL' },
    '14,11': { type: 'dl', label: 'DL' },
    
    // Center square (star)
    '7,7': { type: 'star', label: '★' }
  };

  // Create the 15x15 board
  const renderBoard = () => {
    const board = [];
    
    for (let row = 0; row < 15; row++) {
      for (let col = 0; col < 15; col++) {
        const key = `${row},${col}`;
        const special = specialSquares[key] || { type: 'regular', label: '' };
        
        board.push(
          <div 
            key={key} 
            className={`board-square ${special.type}`}
            data-row={row}
            data-col={col}
          >
            {special.label}
          </div>
        );
      }
    }
    
    return board;
  };

  return (
    <div className="game-board-container">
      <h2>Scrabble Board</h2>
      <div className="game-board">
        {renderBoard()}
      </div>
    </div>
  );
};

export default GameBoard;