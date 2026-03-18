import React, { useState } from 'react';
import MapComponent from './components/MapComponent';
import Timeline from './components/Timeline';
import EventDetails from './components/EventDetails';
import Legend from './components/Legend';
import BriefingModal from './components/BriefingModal';
import { events } from './data/events';
import { events2 } from './data/events2';
import { events3 } from './data/events3';
import { events4 } from './data/events4';
import { forts } from './data/forts';

const allEvents = [...events, ...events2, ...events3, ...events4, ...forts];

function App() {
  const [currentYear, setCurrentYear] = useState(2026);
  const [selectedEvents, setSelectedEvents] = useState([]);
  const [activeBriefing, setActiveBriefing] = useState(null);

  // Calculate global min and max bounds for the timeline slider
  const allYears = allEvents.reduce((acc, e) => {
    acc.push(e.startYear);
    acc.push(e.endYear);
    return acc;
  }, []);

  const minYear = Math.min(...allYears) || -600;
  const maxYear = 2026; // Present day explicitly set to 2026

  const handleYearChange = (year) => {
    setCurrentYear(year);
  };

  const handleEventClick = (clickedEvent) => {
    // If multiple events are occurring at this specific location at this specific time, group them!
    const overlappingEvents = allEvents.filter(e =>
      e.startYear <= currentYear && e.endYear >= currentYear &&
      Math.abs(e.lat - clickedEvent.lat) < 0.1 &&
      Math.abs(e.lng - clickedEvent.lng) < 0.1
    );

    // Sort overlapping chronologically
    overlappingEvents.sort((a, b) => a.startYear - b.startYear);
    setSelectedEvents(overlappingEvents.length > 0 ? overlappingEvents : [clickedEvent]);
  };

  const closeDetails = () => setSelectedEvents([]);
  const handleBriefing = (event) => setActiveBriefing(event);
  const closeBriefing = () => setActiveBriefing(null);

  return (
    <div className="app-container" style={{ position: 'relative', width: '100vw', height: '100vh', backgroundColor: '#080c14' }}>
      <MapComponent
        events={allEvents}
        currentYear={currentYear}
        onEventClick={handleEventClick}
      />

      <Timeline
        currentYear={currentYear}
        minYear={minYear}
        maxYear={maxYear}
        onChange={handleYearChange}
      />

      <EventDetails
        events={selectedEvents}
        onClose={closeDetails}
        onBriefing={handleBriefing}
      />

      {activeBriefing && (
        <BriefingModal
          event={activeBriefing}
          onClose={closeBriefing}
        />
      )}

      <Legend />
    </div>
  );
}

export default App;
