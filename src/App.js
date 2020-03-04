import React from 'react';
// import logo from './logo.svg';
import gambar from './img/gambarHome.svg'
import './css/style.css';
import Home from './components/Home';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home gambar={gambar} />
    </div>
  );
}

export default App;
