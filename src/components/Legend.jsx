import React, { useState } from 'react';
import './Legend.css';

const eras = [
    { name: 'Ancient Era', range: '543 BCE – 898 CE', color: '#e8a838' },
    { name: 'Medieval Era', range: '993 – 1504 CE', color: '#a855f7' },
    { name: 'Portuguese Era', range: '1505 – 1658 CE', color: '#3b82f6' },
    { name: 'Dutch Era', range: '1659 – 1795 CE', color: '#10b981' },
    { name: 'British Era', range: '1796 – 1947 CE', color: '#ef4444' },
    { name: 'Modern Era', range: '1948 – Present', color: '#f97316' },
];

const types = [
    { label: 'Invasion', icon: '⚔️' },
    { label: 'Battle', icon: '💥' },
    { label: 'Conflict', icon: '🗡️' },
    { label: 'Rebellion', icon: '✊' },
    { label: 'Political', icon: '🏛️' },
    { label: 'Colonial', icon: '🚢' },
    { label: 'Cultural', icon: '📜' },
    { label: 'Social', icon: '🤝' },
    { label: 'Diplomatic', icon: '🕊️' },
    { label: 'Economic', icon: '📈' },
    { label: 'Protest', icon: '📣' },
    { label: 'Disaster', icon: '🌊' },
];

const Legend = () => {
    const [collapsed, setCollapsed] = useState(false);

    return (
        <div className={`legend-panel glass-panel ${collapsed ? 'legend-collapsed' : ''}`}>
            <div className="legend-header" onClick={() => setCollapsed(c => !c)}>
                <span className="legend-title">🗺️ Map Legend</span>
                <span className="legend-toggle">{collapsed ? '＋' : '－'}</span>
            </div>

            {!collapsed && (
                <div className="legend-body">
                    <p className="legend-section-label">ERA (Marker Colour)</p>
                    <ul className="legend-era-list">
                        {eras.map(era => (
                            <li key={era.name} className="legend-era-item">
                                <span
                                    className="legend-dot"
                                    style={{
                                        backgroundColor: era.color,
                                        boxShadow: `0 0 8px ${era.color}`,
                                    }}
                                />
                                <div className="legend-era-text">
                                    <span className="legend-era-name">{era.name}</span>
                                    <span className="legend-era-range">{era.range}</span>
                                </div>
                            </li>
                        ))}
                    </ul>

                    <p className="legend-section-label" style={{ marginTop: 14 }}>EVENT TYPE (Panel Icon)</p>
                    <ul className="legend-type-list">
                        {types.map(t => (
                            <li key={t.label} className="legend-type-item">
                                <span className="legend-icon">{t.icon}</span>
                                <span className="legend-type-name">{t.label}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
};

export default Legend;
