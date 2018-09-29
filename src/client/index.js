import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Landing from './Landing';
import {BrowserRouter as Router, Route } from 'react-router-dom';

ReactDOM.render(
<Router>
<App>
      <Route path='/' component={Landing}/>
</App>
</Router>

, document.getElementById('root'));
