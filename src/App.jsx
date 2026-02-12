import { useState } from 'react'
import PlayerList from './components/PlayerList'
import PlayerDetail from './components/PlayerDetail'
import { players } from './data/players'

export default function App() {
  const [selectedPlayer, setSelectedPlayer] = useState(null)

  const handlePlayerSelect = (player) => {
    setSelectedPlayer(player)
  }

  const handleBack = () => {
    setSelectedPlayer(null)
  }

  return (
    <div className="app-container">
      <header className="app-header">
        <h1>PANINI MUNDIAL 2022</h1>
        <p>Galería de Jugadores - Selección de Inglaterra</p>
      </header>

      {selectedPlayer ? (
        <PlayerDetail 
          player={selectedPlayer}
          onBack={handleBack}
        />
      ) : (
        <PlayerList 
          players={players}
          onSelectPlayer={handlePlayerSelect}
        />
      )}

      <footer className="app-footer">
        <p>© 2024 Panini Album</p>
      </footer>
    </div>
  )
}
