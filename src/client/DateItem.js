import React, { Component } from 'react';
import TimeItem from './TimeItem';

class DateItem extends Component {

constructor(props){
   super(props);
   this.state = {
      date:this.props.date,
      raw:this.props.raw,
      isToggleOn: false
      };
   //this.state = {isToggleOn: false};
   this.handleClick = this.handleClick.bind(this);
}

handleClick() {
    this.setState(state => ({
      isToggleOn: !state.isToggleOn
    }));
}

render() {
   return (
         <span>
            <button onClick={this.handleClick} className="showButton" >
              <p>{this.state.date}</p> 
            </button>
           {this.state.isToggleOn ? <TimeItem raw={this.state.raw} /> : ''}
         </span>
   );
}

}

export default DateItem;