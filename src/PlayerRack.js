import React, { useState, useEffect } from 'react';
import tileDistribution from './tileDistribution';
import './PlayerRack.css';

const PlayerRack = () => {
  const [playerTiles, setPlayerTiles] = useState([]);
  
  // Function to draw random tiles from the distribution
  const drawRandomTiles = (count) => {
    // Create a pool of all available tiles based on their counts
    const tilePool = [];
    tileDistribution.forEach(tile => {
      for (let i = 0; i < tile.count; i++) {
        tilePool.push({ ...tile });
      }
    });
    
    // Shuffle the tile pool
    const shuffled = [...tilePool].sort(() => 0.5 - Math.random());
    
    // Take the first 'count' tiles
    return shuffled.slice(0, count);
  };
  
  // Initialize player's tiles on component mount
  useEffect(() => {
    setPlayerTiles(drawRandomTiles(7));
  }, []);
  
  return (
    <div className="player-rack-container">
      <h3>Your Tiles</h3>
      <div className="player-rack">
        {playerTiles.map((tile, index) => (
          <div className="player-tile" key={index} draggable="true">
            <span className="tile-letter">{tile.letter}</span>
            <span className="tile-points">{tile.points}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PlayerRack;