import React from 'react';
// import logo from './logo.svg';
import './App.css';
import PanelsContainer from './PanelsContainer.js'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h3>
          Contacts 'R Us : The Cat Edition
        </h3>
        <PanelsContainer/>
      </header>
    </div>
  );
}

export default App;
