import React from 'react';
import ReactDOM from 'react-dom/client';
import TileTrack from './TileTrack';
import GameBoard from './GameBoard';
import PlayerRack from './PlayerRack';
import './TileTrack.css';
import './GameBoard.css';
import './PlayerRack.css';

const App = () => (
  <div className="scrabble-app">
    <h1 style={{ textAlign: 'center', color: '#333' }}>Scrabble Game</h1>
    <GameBoard />
    <PlayerRack />
    <TileTrack />
  </div>
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
