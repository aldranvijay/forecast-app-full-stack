import React, { Component } from 'react';
import DateItem from './DateItem';

class WeatherReport extends Component {

constructor(props){
   super(props);
   this.state = {data:this.props.data};
   this.dateWiseRaw = this.dateWiseRaw.bind(this);
}

dateWiseRaw(){
    let data_ = JSON.parse(this.state.data);
    var arrData = [];
    var dateBlock = {
       date:null,
       raw:[]
    };
    if("200" === data_.data.cod){
    for (let value of data_.data.list) {
        console.log('inside loop :'+value);
        let dateTime = value.dt_txt; 
        let splitted = dateTime.split(" ", 2); 
        console.log('Date '+splitted[0]);
        console.log('Time' +splitted[1]);
        let localDateBlock = null;
        arrData.forEach((key, val) =>{
           //console.log('dateBlock retrieved key :  '+JSON.stringify(key));
           //console.log('dateBlock retrieved val :  '+JSON.stringify(val));
           if(splitted[0] === key.date){
              arrData[val].raw = key.raw.concat(value);
              localDateBlock = key.raw;
             // console.log('match found');
           }
        });
        
        if(localDateBlock == null){
           let newDateBlock = {
             date:splitted[0],
             raw:[value]
          };
           arrData.push(newDateBlock);
        }
        // else{
        //     arrData.push(localDateBlock);
        // }
    }
    }else{
       let newDateBlock = {
             date:"City not found! Please enter again.",
             raw:[]
          };
       arrData.push(newDateBlock); 
    }
    console.log('arrData complete '+ JSON.stringify(arrData));
    return(
      arrData.map((val) => <DateItem date={val.date} raw={val.raw}/>)
    );
}


render() {
   return (
      <div>{this.dateWiseRaw()}</div>
   );
}

}

export default WeatherReport;
