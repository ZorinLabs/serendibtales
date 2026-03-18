import React from 'react';
import './EventDetails.css';

const eraColors = {
    Ancient: '#e8a838',
    Medieval: '#a855f7',
    Portuguese: '#3b82f6',
    Dutch: '#10b981',
    British: '#ef4444',
    Modern: '#f97316',
};

const typeIcons = {
    invasion: '⚔️',
    conflict: '🗡️',
    battle: '💥',
    political: '🏛️',
    colonial: '🚢',
    arrival: '⛵',
    rebellion: '✊',
    protest: '📣',
    disaster: '🌊',
    kingdom: '👑',
    cultural: '📜',
    social: '🤝',
    diplomatic: '🕊️',
    economic: '📈',
};

const EventDetails = ({ events, onClose, onBriefing }) => {
    if (!events || events.length === 0) return null;

    return (
        <div className="event-details-panel glass-panel">
            <button className="close-btn" onClick={onClose}>&times;</button>

            <div className="events-scroll-container">
                {events.map((event, index) => {
                    const startLabel = event.startYear < 0 ? `${Math.abs(event.startYear)} BCE` : `${event.startYear} CE`;
                    const endLabel = event.endYear < 0 ? `${Math.abs(event.endYear)} BCE` : `${event.endYear} CE`;
                    const timeLabel = event.startYear === event.endYear ? startLabel : `${startLabel} – ${endLabel}`;
                    const eraColor = eraColors[event.era] || '#94a3b8';
                    const typeIcon = typeIcons[event.type] || '📌';

                    return (
                        <div key={event.id} className="event-item">
                            {/* Era badge */}
                            {event.era && (
                                <div className="era-banner" style={{ borderColor: eraColor, color: eraColor }}>
                                    {event.era.toUpperCase()} ERA
                                </div>
                            )}

                            <div className="event-header">
                                <h2>{typeIcon} {event.title}</h2>
                                <div className="event-meta">
                                    <span className="year-bubble">{timeLabel}</span>
                                    <span className="type-bubble" style={{ backgroundColor: eraColor + '33', borderColor: eraColor, color: eraColor }}>
                                        {event.type.toUpperCase()}
                                    </span>
                                </div>
                            </div>

                            {event.images && event.images.length > 0 && (
                                <div className="event-image">
                                    <img src={event.images[0]} alt={event.title} />
                                </div>
                            )}

                            <div className="event-body">
                                <p>{event.description}</p>

                                {/* Parties Involved */}
                                {event.partiesInvolved && (
                                    <div className="detail-block parties-block">
                                        <h4>⚔️ Parties Involved</h4>
                                        <p>{event.partiesInvolved}</p>
                                    </div>
                                )}

                                {/* Outcome */}
                                {event.outcome && (
                                    <div className="detail-block outcome-block">
                                        <h4>📜 Outcome / Result</h4>
                                        <p>{event.outcome}</p>
                                    </div>
                                )}

                                {/* Briefing Button */}
                                <button
                                    className="briefing-btn"
                                    style={{ borderColor: eraColor, color: eraColor }}
                                    onClick={() => onBriefing && onBriefing(event)}
                                >
                                    📖 Full Briefing
                                </button>

                                {event.sources && event.sources.length > 0 && (
                                    <div className="event-sources">
                                        <h4>🗂️ Historical Sources</h4>
                                        <ul>
                                            {event.sources.map((source, idx) => (
                                                <li key={idx}>{source}</li>
                                            ))}
                                        </ul>
                                    </div>
                                )}
                            </div>

                            {index < events.length - 1 && <hr className="event-divider" />}
                        </div>
                    );
                })}
            </div>
        </div>
    );
};
export default EventDetails;
