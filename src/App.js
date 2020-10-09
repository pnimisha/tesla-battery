import React from 'react';
import Header from './components/Header/Header';
import TeslaBattety from './containers/TeslaBattery'

function App() {
  const defaultValues = {
    speed : {
      title: "speed",
      max: 70,
      min: 45,
      step: 5,
      unit: "mph"
    },
    temperature : {
      title: "Outside Temperature",
      unit: "°",
      step: 10,
      min: -10,
      max: 40
    }
  }
  return (
    <div className="App">
      <Header />
      <TeslaBattety counterDefaultVal={defaultValues}/>

    </div>
  );
}

export default App;
