import React, { Component } from 'react';

class TimeItem extends Component {

constructor(props){
   super(props);
   this.state = {
        raw:this.props.raw
      };
   this.timeWiseRawHandler = this.timeWiseRawHandler.bind(this);
}

timeWiseRawHandler(){
    let data_ = this.state.raw;
    
    return(
      data_.map((val) => 
         <table className="timeBlock">
         <tr><td><p>Time</p></td><td>{val.dt_txt}</td></tr>
         <tr><td><p>Temperature</p></td><td>{val.main.temp}</td></tr>
         <tr><td><p>Pressure</p></td><td>{val.main.pressure}</td></tr>
         <tr><td><p>Humidity</p></td><td>{val.main.humidity}</td></tr>
         <tr><td><p>Weather</p></td><td><img src={`http://openweathermap.org/img/w/${val.weather[0].icon}.png`} /></td></tr>
         <tr><td><p>Cloud</p></td><td>{val.clouds.all}</td></tr>
         <tr><td><p>Wind Speed</p></td><td>{val.wind.speed}</td></tr>
         <tr><td><p>Wind Degree</p></td><td>{val.wind.deg}</td></tr>
         </table>
      )
    );
    
}

render() {
   return (
      <span className="timeBlockSpan">
        {this.timeWiseRawHandler()}
      </span>
   );
}

}

export default TimeItem;


