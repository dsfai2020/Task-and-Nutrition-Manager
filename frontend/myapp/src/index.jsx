import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App.jsx';

import WorkOuts from './Workouts.jsx';

import MyHook from './myHook.js';
import Bars from './bars.jsx'

import Navbar from './Navbar.jsx';
import MachineLearningPage from './MachineLearning.jsx';

import reportWebVitals from './reportWebVitals';

import MyRoutes from './pages/routetest';
import DiscussionRoutes from './pages_discussion/DiscussionRoutes';
import Discussion from './pages_discussion/Discussion';

import MiniCalendar from './MiniCalendar.jsx'
import Board from './Board'
import MainToDoList from './MainToDoList.jsx';
import StoryUi from './StoryUi.jsx';

import Schedule from './Schedule.jsx';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <div>
  {/* <React.StrictMode> */}
    <div class="item-header"></div>
    <Navbar />
    <DiscussionRoutes />
    
    <MyRoutes />
    <MiniCalendar />
    <Schedule />
    <StoryUi />
    <MainToDoList />
    {/* <Board /> */}

    <div class="item-main"></div>
    <div class="item-sidebar"></div>
    {/* <App /> */}
    <WorkOuts />
    <MyHook />
    {/* <Bars /> */}
    <div class="item-footer"></div>
  {/* </React.StrictMode> */}
    </div>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
