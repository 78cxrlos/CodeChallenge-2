import React, { useState } from 'react';

function SortBar({ sortBots, filterByClass }) {
  const [sortBy, setSortBy] = useState('health');
  const [selectedClass, setSelectedClass] = useState(null);

  const handleSortChange = (e) => {
    const sortByValue = e.target.value;
    setSortBy(sortByValue);
    sortBots(sortByValue);
  };

  const handleClassFilter = (botClass) => {
    setSelectedClass(botClass);
    filterByClass(botClass);
  };

  return (
    <div>
      <select value={sortBy} onChange={handleSortChange}>
        <option value="health">Sort by Health</option>
        <option value="damage">Sort by Damage</option>
        <option value="armor">Sort by Armor</option>
      </select>
      <div>
        <button onClick={() => filterByClass(null)}>Show All</button>
      </div>
    </div>
  );
}

export default SortBar;