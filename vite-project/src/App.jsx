import { useState } from 'react'
import GameBoard from './components/GameBoard'
import PlayerRack from './components/PlayerRack'
import TileTrack from './components/TileTrack'
import './styles/App.css'

function App() {
  return (
    <div className="scrabble-app">
      <header className="app-header">
        <h1 className="app-title">Scrabble Game</h1>
      </header>
      
      <GameBoard />
      <PlayerRack />
      <TileTrack />
    </div>
  )
}

export default App