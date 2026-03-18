import React from 'react';
import './BriefingModal.css';

const eraColors = {
    Ancient: '#e8a838',
    Medieval: '#a855f7',
    Portuguese: '#3b82f6',
    Dutch: '#10b981',
    British: '#ef4444',
    Modern: '#f97316',
};

const groupLabels = {
    capital: { icon: '🏰', label: 'Kingdom / Capital' },
    fort: { icon: '🏯', label: 'Fort / Fortress' },
    battle: { icon: '⚔️', label: 'Battle / Invasion' },
    conflict: { icon: '🗡️', label: 'Conflict' },
    invasion: { icon: '⚔️', label: 'Invasion' },
    rebellion: { icon: '✊', label: 'Rebellion' },
    political: { icon: '🏛️', label: 'Political Event' },
    cultural: { icon: '📜', label: 'Cultural Event' },
    social: { icon: '🤝', label: 'Social Event' },
    diplomatic: { icon: '🕊️', label: 'Diplomatic Event' },
    economic: { icon: '📈', label: 'Economic Event' },
    protest: { icon: '📣', label: 'Protest / Uprising' },
    disaster: { icon: '🌊', label: 'Disaster' },
    arrival: { icon: '⛵', label: 'Arrival' },
    colonial: { icon: '🚢', label: 'Colonial Event' },
    kingdom: { icon: '👑', label: 'Kingdom' },
};

const BriefingModal = ({ event, onClose }) => {
    if (!event) return null;

    const eraColor = eraColors[event.era] || '#94a3b8';
    const typeInfo = groupLabels[event.type] || { icon: '📌', label: event.type };
    const startLabel = event.startYear < 0 ? `${Math.abs(event.startYear)} BCE` : `${event.startYear} CE`;
    const endLabel = event.endYear < 0 ? `${Math.abs(event.endYear)} BCE` : `${event.endYear} CE`;
    const timeLabel = event.startYear === event.endYear ? startLabel : `${startLabel} – ${endLabel}`;
    const duration = Math.abs(event.endYear - event.startYear);

    return (
        <div className="briefing-overlay" onClick={onClose}>
            <div className="briefing-modal" onClick={e => e.stopPropagation()}>

                {/* Close */}
                <button className="briefing-close" onClick={onClose} title="Close">✕</button>

                {/* Header banner */}
                <div className="briefing-header" style={{ borderColor: eraColor }}>
                    <div className="briefing-era-tag" style={{ backgroundColor: eraColor + '22', color: eraColor, borderColor: eraColor }}>
                        {event.era ? event.era.toUpperCase() + ' ERA' : 'HISTORY'}
                    </div>
                    <h1 className="briefing-title">{typeInfo.icon} {event.title}</h1>
                    <div className="briefing-subtitle">
                        <span className="briefing-time">⏱ {timeLabel}</span>
                        {duration > 0 && <span className="briefing-duration">({duration} {duration === 1 ? 'year' : 'years'})</span>}
                        <span className="briefing-type-tag" style={{ color: eraColor, borderColor: eraColor }}>
                            {typeInfo.label}
                        </span>
                    </div>
                </div>

                <div className="briefing-body">
                    {/* Hero image */}
                    {event.images && event.images.length > 0 && (
                        <div className="briefing-image-wrap">
                            <img src={event.images[0]} alt={event.title} className="briefing-image" />
                        </div>
                    )}

                    {/* Two-column cards */}
                    <div className="briefing-cards">
                        {event.partiesInvolved && (
                            <div className="briefing-card briefing-card--blue">
                                <div className="briefing-card-icon">⚔️</div>
                                <h3>Parties Involved</h3>
                                <p>{event.partiesInvolved}</p>
                            </div>
                        )}
                        {event.outcome && (
                            <div className="briefing-card briefing-card--green">
                                <div className="briefing-card-icon">📜</div>
                                <h3>Outcome / Result</h3>
                                <p>{event.outcome}</p>
                            </div>
                        )}
                    </div>

                    {/* Full description */}
                    <div className="briefing-section">
                        <h2 className="briefing-section-title" style={{ color: eraColor }}>📖 Historical Account</h2>
                        <p className="briefing-description">{event.description}</p>
                    </div>

                    {/* Location */}
                    <div className="briefing-section">
                        <h2 className="briefing-section-title" style={{ color: eraColor }}>📍 Location</h2>
                        <p className="briefing-description" style={{ color: '#94a3b8' }}>
                            Coordinates: {event.lat?.toFixed(4)}°N, {event.lng?.toFixed(4)}°E
                            <br />
                            <a
                                href={`https://www.openstreetmap.org/?mlat=${event.lat}&mlon=${event.lng}&zoom=9`}
                                target="_blank"
                                rel="noreferrer"
                                style={{ color: eraColor }}
                            >
                                View on OpenStreetMap ↗
                            </a>
                        </p>
                    </div>

                    {/* Sources */}
                    {event.sources && event.sources.length > 0 && (
                        <div className="briefing-section">
                            <h2 className="briefing-section-title" style={{ color: eraColor }}>🗂️ Primary Sources</h2>
                            <ul className="briefing-sources">
                                {event.sources.map((s, i) => <li key={i}>{s}</li>)}
                            </ul>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default BriefingModal;
