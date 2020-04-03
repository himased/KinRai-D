import React from 'react';
import profileImage from './img/lemillion.jpg';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Kin Rai-D</h1>
      <h2>Auther: Atom</h2>
      <image src={profileImage} alt="profile-image" />
    </div>
  );
}

export default App;
