export default function PlayerCard({ player, onClick }) {
  return (
    <div className="player-card" onClick={onClick}>
      <div className="player-card-image">
        <img src={player.image} alt={player.name} className="player-img" />
        <div className="player-number">{player.number}</div>
      </div>
      <div className="player-card-info">
        <h3 className="player-name">{player.name}</h3>
        <p className="player-position">{player.position}</p>
        <p className="player-club">{player.club}</p>
        <div className="player-stats-mini">
          <span className="stat-mini">{player.caps} partidos</span>
          <span className="stat-mini">{player.goals} goles</span>
        </div>
      </div>
    </div>
  )
}
