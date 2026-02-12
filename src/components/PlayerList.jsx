import PlayerCard from './PlayerCard'

export default function PlayerList({ players, onSelectPlayer }) {
  return (
    <main className="player-list-container">
      <div className="filters">
        <h2>Selecciona un jugador</h2>
      </div>
      <div className="players-grid">
        {players.map((player) => (
          <PlayerCard 
            key={player.id}
            player={player}
            onClick={() => onSelectPlayer(player)}
          />
        ))}
      </div>
    </main>
  )
}
