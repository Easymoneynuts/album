export default function PlayerDetail({ player, onBack }) {
  return (
    <main className="player-detail-container">
      <button className="btn-back" onClick={onBack}>← Volver</button>
      
      <article className="player-detail-card">
        <div className="detail-header">
          <div className="detail-image">
            <img src={player.image} alt={player.name} className="detail-img" />
            <div className="detail-number">{player.number}</div>
          </div>

          <div className="detail-header-info">
            <h1 className="detail-name">{player.name}</h1>
            <p className="detail-country">{player.country}</p>
            <p className="detail-position">{player.position}</p>
            <p className="detail-description">{player.description}</p>
          </div>
        </div>

        <div className="detail-content">
          <section className="detail-section">
            <h2>Club</h2>
            <div className="detail-info-grid">
              <div className="info-item">
                <span className="info-label">Club Actual:</span>
                <span className="info-value">{player.club}</span>
              </div>
              <div className="info-item">
                <span className="info-label">País del Club:</span>
                <span className="info-value">{player.clubCountry}</span>
              </div>
              <div className="info-item">
                <span className="info-label">Llegó en:</span>
                <span className="info-value">{player.joinedClub}</span>
              </div>
              <div className="info-item">
                <span className="info-label">Temporada:</span>
                <span className="info-value">{player.season}</span>
              </div>
            </div>
          </section>

          <section className="detail-section">
            <h2>Selección Nacional</h2>
            <div className="detail-info-grid">
              <div className="info-item">
                <span className="info-label">Estado:</span>
                <span className="info-value">{player.status}</span>
              </div>
              <div className="info-item">
                <span className="info-label">Partidos Internacionales:</span>
                <span className="info-value">{player.caps}</span>
              </div>
              <div className="info-item">
                <span className="info-label">Goles:</span>
                <span className="info-value">{player.goals}</span>
              </div>
              <div className="info-item">
                <span className="info-label">Mundiales:</span>
                <span className="info-value">{player.worldCups}</span>
              </div>
            </div>
          </section>

          <section className="detail-section">
            <h2>Datos Personales</h2>
            <div className="detail-info-grid">
              <div className="info-item">
                <span className="info-label">Debut Nacional:</span>
                <span className="info-value">{player.debut}</span>
              </div>
              <div className="info-item">
                <span className="info-label">Fecha de Nacimiento:</span>
                <span className="info-value">{player.birthDate}</span>
              </div>
              <div className="info-item">
                <span className="info-label">Lugar de Nacimiento:</span>
                <span className="info-value">{player.birthPlace}</span>
              </div>
              <div className="info-item">
                <span className="info-label">Estatura:</span>
                <span className="info-value">{player.height}</span>
              </div>
            </div>
          </section>

          <section className="detail-section stats-highlight">
            <h2>Estadísticas Destacadas</h2>
            <div className="stats-boxes">
              <div className="stat-box">
                <span className="stat-number">{player.caps}</span>
                <span className="stat-label">Partidos</span>
              </div>
              <div className="stat-box">
                <span className="stat-number">{player.goals}</span>
                <span className="stat-label">Goles</span>
              </div>
              <div className="stat-box">
                <span className="stat-number">{player.worldCups.split(',').length}</span>
                <span className="stat-label">Mundiales</span>
              </div>
              <div className="stat-box">
                <span className="stat-number">{player.height}</span>
                <span className="stat-label">Altura</span>
              </div>
            </div>
          </section>
        </div>
      </article>

      <button className="btn-back bottom" onClick={onBack}>← Volver a la galería</button>
    </main>
  )
}
