import React from 'react';
import './Timeline.css';

const Timeline = ({ currentYear, minYear, maxYear, onChange }) => {
    return (
        <div className="timeline-container glass-panel">
            <div className="timeline-header">
                <h2>{currentYear < 0 ? `${Math.abs(currentYear)} BC` : `${currentYear} AD`}</h2>
                <p>Explore Sri Lanka's timeline of conflicts and historical foundation</p>
            </div>
            <input
                type="range"
                min={minYear}
                max={maxYear}
                value={currentYear}
                onChange={(e) => onChange(parseInt(e.target.value))}
                className="timeline-slider"
            />
            <div className="timeline-labels">
                <span>{minYear < 0 ? `${Math.abs(minYear)} BC` : `${minYear} AD`}</span>
                <span>{maxYear < 0 ? `${Math.abs(maxYear)} BC` : `${maxYear} AD`}</span>
            </div>
        </div>
    );
};
export default Timeline;
