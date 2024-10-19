import React, { useState } from 'react'

const HoursButtons = () => {

    const [selectedHours, setSelectedHours] = useState<number[]>([]);

  const hoursButtons = [];
  for (let hour = 5; hour < 24; hour++) {
    hoursButtons.push(hour);
  }

  const toggleHourSelection = (hour: number) => {
    const currentIndex = selectedHours.indexOf(hour);
    if (currentIndex === -1) {
      setSelectedHours([...selectedHours, hour]);
    } else {
      setSelectedHours(selectedHours.filter((h) => h !== hour));
    }
  };

    return (
        <div>
          {hoursButtons.map(hour => (
            <button
              key={hour}
              onClick={() => toggleHourSelection(hour)}
              style={{
                backgroundColor: selectedHours.includes(hour) ? 'lightblue' : 'white',
                margin: '5px',
                padding: '10px',
                border: '1px solid #ccc',
                borderRadius: '5px',
                cursor: 'pointer',
              }}
            >
              {hour}:00
            </button>
          ))}
          <div>
            <h3>Horas seleccionadas:</h3>
            <ul>
              {selectedHours.map(hour => (
                <li key={hour}>{hour}:00</li>
              ))}
            </ul>
          </div>
        </div>
      );
}

export default HoursButtons