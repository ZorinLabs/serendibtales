import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

delete L.Icon.Default.prototype._getIconUrl;

const eraColorMap = {
    Ancient: '#e8a838',
    Medieval: '#a855f7',
    Portuguese: '#3b82f6',
    Dutch: '#10b981',
    British: '#ef4444',
    Modern: '#f97316',
};

// ── Categorise each event into a visual group ───────────────────
const getDisplayGroup = (type) => {
    if (type === 'capital') return 'capital';
    if (type === 'fort') return 'fort';
    if (['battle', 'invasion', 'conflict', 'rebellion'].includes(type)) return 'battle';
    return 'event';
};

// ── Icon factories ───────────────────────────────────────────────
const makeCapitalIcon = (color) => L.divIcon({
    className: '',
    html: `
    <div style="
      display:flex;align-items:center;justify-content:center;
      width:34px;height:34px;
      background:rgba(0,0,0,0.6);
      border:2px solid ${color};
      border-radius:6px;
      box-shadow:0 0 14px ${color}88;
      font-size:18px;
      line-height:1;
      filter:drop-shadow(0 0 6px ${color});
    ">🏰</div>`,
    iconSize: [34, 34],
    iconAnchor: [17, 17],
});

const makeFortIcon = (color) => L.divIcon({
    className: '',
    html: `
    <div style="
      display:flex;align-items:center;justify-content:center;
      width:30px;height:30px;
      background:rgba(0,0,0,0.6);
      border:2px solid ${color};
      border-radius:4px;
      box-shadow:0 0 10px ${color}88;
      font-size:16px;
      line-height:1;
    ">🏯</div>`,
    iconSize: [30, 30],
    iconAnchor: [15, 15],
});

const makeBattleIcon = () => L.divIcon({
    className: '',
    html: `
    <div style="
      display:flex;align-items:center;justify-content:center;
      width:28px;height:28px;
      background:rgba(180,20,20,0.25);
      border:2px solid #ff3333;
      border-radius:50%;
      box-shadow:0 0 12px #ff333388;
      font-size:14px;
      line-height:1;
      animation: battlePulse 1.6s ease-in-out infinite;
    ">⚔️</div>`,
    iconSize: [28, 28],
    iconAnchor: [14, 14],
});

const makeEventIcon = (color) => L.divIcon({
    className: '',
    html: `
    <div style="
      width:13px;height:13px;
      border-radius:50%;
      background:${color};
      border:2px solid rgba(255,255,255,0.35);
      box-shadow:0 0 8px ${color};
    "></div>`,
    iconSize: [13, 13],
    iconAnchor: [6, 6],
});

// inject pulse keyframe once
if (typeof document !== 'undefined' && !document.getElementById('battle-pulse-style')) {
    const s = document.createElement('style');
    s.id = 'battle-pulse-style';
    s.textContent = `
    @keyframes battlePulse {
      0%,100%{box-shadow:0 0 8px #ff333388;}
      50%{box-shadow:0 0 22px #ff3333cc;}
    }`;
    document.head.appendChild(s);
}

const MapComponent = ({ events, currentYear, onEventClick }) => {
    const visibleEvents = events.filter(e => e.startYear <= currentYear && e.endYear >= currentYear);

    // Creative Solution: Avoid overlapping symbols by distributing them in a neat circle
    // Group events by exact same latitude and longitude
    const locationGroups = visibleEvents.reduce((acc, event) => {
        const key = `${event.lat.toFixed(3)}_${event.lng.toFixed(3)}`;
        if (!acc[key]) acc[key] = [];
        acc[key].push(event);
        return acc;
    }, {});

    // Apply a radial offset for locations holding multiple events
    const offsetEvents = [];
    Object.values(locationGroups).forEach(group => {
        if (group.length === 1) {
            offsetEvents.push({ ...group[0], displayLat: group[0].lat, displayLng: group[0].lng });
        } else {
            // If multiple events at the exact same spot, space them out evenly in a circle
            const baseRadius = 0.15; // roughly 15km offset visually
            group.forEach((evt, index) => {
                const radius = group.length > 6 ? (index % 2 === 0 ? baseRadius : baseRadius + 0.1) : baseRadius;
                const angle = (index / group.length) * Math.PI * 2;
                offsetEvents.push({
                    ...evt,
                    displayLat: evt.lat + Math.sin(angle) * (radius / 111), // 1 degree lat is ~111km
                    displayLng: evt.lng + Math.cos(angle) * (radius / 111), // rough conversion for lng
                });
            });
        }
    });

    return (
        <MapContainer center={[7.8731, 80.7718]} zoom={7.5} style={{ height: '100%', width: '100%' }} zoomControl={false}>
            <TileLayer
                url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
                attribution='&copy; <a href="https://carto.com/">CARTO</a>'
            />

            {offsetEvents.map((event) => {
                const color = eraColorMap[event.era] || '#94a3b8';
                const group = getDisplayGroup(event.type);

                let icon;
                if (group === 'capital') icon = makeCapitalIcon(color);
                else if (group === 'fort') icon = makeFortIcon(color);
                else if (group === 'battle') icon = makeBattleIcon();
                else icon = makeEventIcon(color);

                const startLabel = event.startYear < 0 ? `${Math.abs(event.startYear)} BCE` : `${event.startYear} CE`;
                const endLabel = event.endYear < 0 ? `${Math.abs(event.endYear)} BCE` : `${event.endYear} CE`;
                const timeLabel = event.startYear === event.endYear ? startLabel : `${startLabel} – ${endLabel}`;

                return (
                    <Marker
                        key={event.id}
                        position={[event.displayLat || event.lat, event.displayLng || event.lng]}
                        icon={icon}
                        eventHandlers={{ click: () => onEventClick(event) }}
                    >
                        <Popup>
                            <div style={{ textAlign: 'center', cursor: 'pointer', minWidth: 160 }} onClick={() => onEventClick(event)}>
                                <div style={{ fontSize: '0.63rem', fontWeight: 800, letterSpacing: '1.5px', color, marginBottom: 3 }}>
                                    {event.era ? event.era.toUpperCase() + ' ERA' : ''}
                                    {' · '}
                                    {group === 'capital' ? '🏰 CAPITAL' : group === 'fort' ? '🏯 FORT' : group === 'battle' ? '⚔️ BATTLE' : '● EVENT'}
                                </div>
                                <h3 style={{ margin: '0 0 4px 0', color: '#e2e8f0', fontFamily: 'Georgia,serif', fontSize: '0.9rem', lineHeight: 1.3 }}>
                                    {event.title}
                                </h3>
                                <p style={{ margin: '0', fontSize: '0.78rem', color: '#94a3b8' }}>{timeLabel}</p>
                                <p style={{ margin: '6px 0 0 0', fontSize: '0.7rem', color: '#475569', fontStyle: 'italic' }}>Click for details</p>
                            </div>
                        </Popup>
                    </Marker>
                );
            })}
        </MapContainer>
    );
};

export default MapComponent;
