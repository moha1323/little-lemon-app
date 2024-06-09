import React from 'react';
import './App.css';
import Home from "./Home";

function App() {
  const confirmed = "no";

  return (
    <>
      <Home reservation={confirmed}/>
    </>
  );
}

export default App;
