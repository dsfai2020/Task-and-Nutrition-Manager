import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App.jsx';

import WorkOuts from './workouts.jsx';

import MyHook from './myHook.js';
import Bars from './bars.jsx'

import Navbar from './Navbar.jsx';
import MachineLearningPage from './MachineLearning.jsx';


import MyRoutes from './pages/routetest';

import MiniCalendar from './MiniCalendar.jsx'
import Board from './Board'
import MainToDoList from './MainToDoList.jsx';
import StoryUi from './StoryUi.jsx';

import Schedule from './Schedule.jsx';
import CustomDND from './CustomDND.jsx';

// import AnalyticsUi from './AnalyticsUi.jsx';
import { TopLevelUi } from './AnalyticsUi.jsx';

import Footer from './Footer.jsx';

import MongoTest from './Mongo.jsx';
// import GoogleCalendarButton from './GoogleAppointments.jsx';

import Header from './Header.jsx';
import './ThemeTesting.css'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <div>
    <head class="item-header">
        <meta name="theme-color" content="#FF0000" />
        <Header />
    </head>
    {/* <Navbar /> */}
    {/* <GoogleCalendarButton /> */}
    <MyRoutes />

    <MiniCalendar />
    
    {/* <AnalyticsUi /> */}
    {/* Tasks, phase and Exp all contained in TopLevelUi (housed in the AnalyticsUi) - It contains StagesUi and AnalyticsUi in one.*/}
    <TopLevelUi />

    {/* <CustomDND /> */}
    <Schedule />
    <StoryUi />
    <MainToDoList />
    {/* <Board /> */}

    <div class="item-main"></div>
    <div class="item-sidebar"></div>
    {/* <App /> */}

    {/* <MongoTest /> */}

    <WorkOuts />
    <MyHook />
    {/* <Bars /> */}
    <div class="item-footer"></div>
    <Footer />
    </div>
);

