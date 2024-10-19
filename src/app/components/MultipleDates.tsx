import React, { useState } from 'react'

type MultipleDatesProps = {
    dateLimit: Date
}

const MultipleDates = ({dateLimit}: MultipleDatesProps) => {
    const [selectedDates, setSelectedDates] = useState<Date[]>([]);

  const today = new Date();
  const lastDayOfMonth = new Date(today.getFullYear(), today.getMonth() + 1, 0);
  const dateButtons = [];

  for (let date = today.getDate(); date <= lastDayOfMonth.getDate(); date++) {
    dateButtons.push(new Date(today.getFullYear(), today.getMonth(), date));
  }

  const toggleDateSelection = (date: Date) => {
    const currentIndex = selectedDates.findIndex(d => d.getTime() === date.getTime());
    if (currentIndex === -1) {
      setSelectedDates([...selectedDates, date]);
    } else {
      setSelectedDates(selectedDates.filter((_, index) => index !== currentIndex));
    }
  };
  return (
    <div>
      {dateButtons.map(date => (
        <button
          key={date.toISOString()}
          onClick={() => toggleDateSelection(date)}
          style={{
            backgroundColor: selectedDates.some(d => d.getTime() === date.getTime()) ? 'lightblue' : 'white',
            margin: '5px',
            padding: '10px',
            border: '1px solid #ccc',
            borderRadius: '5px',
            cursor: 'pointer',
          }}
        >
          {date.getDate()}
        </button>
      ))}
      <div>
        <h3>Fechas seleccionadas:</h3>
        <ul>
          {selectedDates.map(date => (
            <li key={date.toISOString()}>{date.toLocaleDateString()}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default MultipleDates