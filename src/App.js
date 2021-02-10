import React, { useEffect, useState } from 'react';
import Header from './components/Header/Header';
import TeslaBattety from './containers/TeslaBattery'
import Weather from './components/Weather/Weather'

function App() {
  const [weatherInfo, setWeatherInfo] = useState({})
  const defaultValues = {
    speed : {
      title: "Speed",
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
  useEffect(()=> {
    if ('geolocation' in navigator) {
    navigator.geolocation.getCurrentPosition((position) => {
      console.log(position.coords.latitude, position.coords.longitude);
      fetch(`http://localhost:3000/weather-lat-lon?lat=${position.coords.latitude}&lon=${position.coords.longitude}`)
      .then(jsonResponse => jsonResponse.json())
      .then(response => {
        const {description, location, temparature} = response 
        
        setWeatherInfo({
          location,
          temparature: `${temparature}\xB0F (${description})`,
        })
      })
    });
  }
  },[])
  let weatherComp;
  if (weatherInfo['location'] !== undefined) {
    weatherComp = <Weather location={weatherInfo.location} temparature={weatherInfo.temparature} />
  }
  return (
    <div className="App">
      <Header />
      { weatherComp }
      {/* <Weather location={weatherInfo.location} temparature={weatherInfo.temparature} /> */}
      <TeslaBattety counterDefaultVal={defaultValues}/>
    </div>
  );
}

export default App;
