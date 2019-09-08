import React from 'react';
import './App.css';
import PanelsContainer from './PanelsContainer.js'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="Border">
          <h2 className="Nudge">
            Contacts 'R Us
          </h2>
        </div>
        <div className="Add-Background">
          <PanelsContainer/>
        </div>
      </header>
    </div>
  );
}

export default App;
