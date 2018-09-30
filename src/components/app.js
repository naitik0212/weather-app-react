import React, { Component } from 'react';
import SearchBar from '../container/search_bar'
import WeatherList from "../container/weather_list";

export default class App extends Component {
  render() {
    return (
      <div style={{ background: 'linear-gradient(to right bottom, white, snow, #bdc3c7, #d7d2cc, #304352)',textAlign: "center"}}>
          <br />
        <div >

            <div style={{ background: 'linear-gradient(to right bottom, #430089, #82ffa1)', minHeight: "120px",textAlign: "center"}}>
                <h2 style={{ padding: "10px 20px", textAlign: "center", color: "white"}}>Welcome to the Weather Application</h2>
                <h5>Type the city name to find the weather details:</h5>

            </div>
        </div>
        <SearchBar />
         <WeatherList />
      </div>

    );
  }
}
