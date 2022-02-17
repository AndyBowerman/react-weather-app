import React from 'react';
const api = {
  key: 'c9fc4bc2ae12b6899ceb97c1633ae166',
  base: 'https://api.openweathermap.org/data/2.5/'
}

function App() {
  return (
    <div className="app">
      <main>
        <div className="search-box">
          <input 
            type="text"
            className="search-bar"
            placeholder="Search..."
          />
        </div>
        <div className="location-box">
          <div className="location">New York City</div>
          <div className="date"></div>
        </div>
      </main>
    </div>
  );
}

export default App;
