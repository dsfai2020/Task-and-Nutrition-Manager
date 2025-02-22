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
import AnalyticsUi from './AnalyticsUi.jsx';

import Footer from './Footer.jsx';

import MongoTest from './Mongo.jsx';
// import GoogleCalendarButton from './GoogleAppointments.jsx';

import Header from './Header.jsx';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <div>
    <div class="item-header">
        <Header />
    </div>
    {/* <Navbar /> */}
    {/* <GoogleCalendarButton /> */}
    <MyRoutes />

    <MiniCalendar />
    <AnalyticsUi />
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

