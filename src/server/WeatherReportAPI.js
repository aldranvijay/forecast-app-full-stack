const fetch = require('node-fetch');
const url = require('url');

module.exports = (app) =>{
    app.post('/weather-report', (req, res) => {
    let city = req.body.city;
    //console.log('city >>>'+city);
    let requestQuery = {
        q:city+',IND',
        appid:'678d1128397cf76555af7c6e2cd4227a'
    };
    
    
    const apiUrl = url.format({
      protocol: 'http',
      hostname: 'api.openweathermap.org',
      pathname: 'data/2.5/forecast',
      query: requestQuery,
    });
    //console.log('URL >>>'+JSON.stringify(apiUrl))
    fetch(apiUrl)
      .then(res => res.json())
      .then(data => {
        res.send({ data });
      })
      .catch(err => {
        //res.redirect('/error');
        console.log(err);
      });
  });
}