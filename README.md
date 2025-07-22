# Scrabble Game Project

A web-based implementation of the classic Scrabble word game.

## Features

- 15x15 game board with special squares (double/triple letter/word scores)
- Tile distribution with correct letter counts and point values
- Interactive gameplay (in development)

## Project Structure

- `src/GameBoard.js` - The 15x15 Scrabble board component
- `src/TileTrack.js` - Component for displaying available letter tiles
- `src/PlayerRack.js` - Component for the player's current 7 tiles
- `src/tileDistribution.js` - Data for Scrabble letter distribution and points

## Getting Started

### Prerequisites

- Node.js and npm installed

### Installation

1. Clone the repository
2. Install dependencies:
   ```
   npm install
   ```
3. Start the development server:
   ```
   npm start
   ```
4. Open your browser to `http://localhost:3000`

## Development Tasks

- [x] Create tile track and letter distribution
- [x] Implement 15x15 board layout
- [ ] Add drag and drop functionality for tiles
- [ ] Implement game logic and scoring
- [ ] Add multiplayer functionality

## Design Resources

- Figma design for the 15x15 board layout (link to be added)