import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import WorkOuts from './workouts.jsx'
import MyHook from './myHook.js'
import Bars from './bars.jsx'

import Navbar from './Navbar.jsx'
import MachineLearningPage from './MachineLearning.jsx';

import reportWebVitals from './reportWebVitals';

import MyRoutes from './pages/routetest';
import DiscussionRoutes from './pages_discussion/DiscussionRoutes';
import Discussion from './pages_discussion/Discussion';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <DiscussionRoutes />
    <MyRoutes />
    <App />
    <Navbar />
    <WorkOuts />
    <MyHook />
    {/* <Bars /> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
