import React from 'react';
import Lottery from './components/lottery/lottery.component'
// import Ball from './components/ball/ball.component';
import './App.css';

function App() {
  return (
    <div className="App">
      <Lottery />
      <Lottery title='Mini Lotto' maxNum={10} numBalls={4}/>
    </div>
  );
}

export default App;
