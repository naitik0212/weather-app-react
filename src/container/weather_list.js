import React, {Component} from 'react';
import {connect} from 'react-redux';
import Chart from '../components/chart';
import GoogleMap from '../components/google_map'

class WeatherList extends Component{

    render() {
        return (
            <div>
            <table className="table table-hover">
            <thead>
            <tr>
                <th> City </th>
                <th> Temperature (F) </th>
                <th> Pressure (hPa)</th>
                <th> Humidity (%)</th>
            </tr>
            </thead>
                <tbody>

                    {this.props.weather.map(this.renderWeather)}

            </tbody>
            </table>
            </div>
        )
    }

    renderWeather(cityData) {
        const name = cityData.city.name;
        const temps = _.map(cityData.list.map( weather => weather.main.temp),(temp) => temp* (9/5) - 459);
        const pressure = cityData.list.map( weather => weather.main.pressure);
        const humidity = cityData.list.map( weather => weather.main.humidity);
        const {lon,lat} = cityData.city.coord;
        // const lat = cityData.city.coord.lat;


        // console.log(temps);

        return (<tr key={name}>
            <td> <GoogleMap lon = {lon} lat={lat}/>
                {name}</td>
            <td>
                <Chart data = {temps} color = "red" units = "F is current temperature"/>
            </td>
            <td>
                <Chart data = {pressure} color = "violet" units = "hPa is currrent pressure"/>
            </td>
            <td>
                <Chart data = {humidity} color = "green" units = "% is current humidity"/>
            </td>

        </tr>
        )


    }
}

function mapStateToProps ({weather}) {
    return {weather};
}

export default connect(mapStateToProps)(WeatherList)
