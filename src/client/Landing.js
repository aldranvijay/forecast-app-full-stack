import React, { Component } from 'react';
import './app.css';
import WeatherReport from './WeatherReport';
const fetch = require('node-fetch');

class Landing extends Component {
   
constructor() {
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {json: ""};
 }
  
handleSubmit(event) {
    event.preventDefault();
    //const data = new FormData(event.target);
    this.setState({
        json: ""
      });
    
    let city = JSON.stringify({
           city: this.refs.city.value
      });
    //alert("inside handleSubmit "+city);
    fetch('/weather-report', {
      body:  JSON.stringify({
           city: this.refs.city.value
      }),
      method: 'POST',
      headers: {'Content-Type': 'application/json'}
    })
    .then(res => res.json())
    .then(data => {
      //alert("inside handleSubmit data "+JSON.stringify(data));
      this.setState({
        json: JSON.stringify(data)
      });
        //res.send({ data });
    })
    .catch(err => {
        //res.redirect('/error');
        console.log(err);
    });
  }

render() {
   return (
      <div>
         <div className="appHeader">
            <h2>Weather forecast</h2>
         </div>

         <div>
      	  <form onSubmit={this.handleSubmit} >
             <input name="city" type="text" placeholder="City Name" className="inputLoc" ref="city" required />
             <button className="loadButton" >Load Forecast</button>
           </form>
         </div>
        {this.state.json === ""?'':<WeatherReport data={this.state.json} />}
      </div>
   );
}

}

export default Landing;

