import React from 'react';
import Header from './Header';
import Landing from './Landing';
import History from './history/History';
import Footer from './Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Landing />
      {/*<History />*/}
      <Footer />
    </div>
  );
}

export default App;
