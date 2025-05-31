import { Outlet, Link } from "react-router-dom";

import './Layout.css' 

// see routetest for more details

const Layout = () => {
  
  return (
    <div class='sticky-navbar'>
    <nav>
    <div class='layout'>

      <div class='container'>
        <div class='layout-item'>
          <Link to="/" class='home'>Home 🏠</Link>
        </div>

        <div class='layout-item'>
          <li>
            <Link to="/about" class='link'>About ℹ</Link>
          </li>
        </div>

        <div class='layout-item'>
          <li>
            <Link to="/blogs" class='link'>Blog 📝</Link>
          </li>
        </div>
        
        <div class='layout-item'>
          <li>
            <Link to="/contact" class='link'>Contact Me 📫</Link>
          </li>
        </div>

        <div class='navbar-shortcuts'>
          <button class='navbar-shortcut-button' onClick={() => document.getElementById('phase-area').scrollIntoView({ behavior: 'smooth'})}>Phase Area</button>
          <button class='navbar-shortcut-button' onClick={() => document.getElementById('story-area').scrollIntoView({ behavior: 'smooth'})}>Story Area</button>
          <button class='navbar-shortcut-button' onClick={() => document.getElementById('task-area').scrollIntoView({ behavior: 'smooth'})}>Task Area</button>
          <button class='navbar-shortcut-button' onClick={() => document.getElementById('fitness-area').scrollIntoView({ behavior: 'smooth'})}>Fitness Area</button>
          <button class='navbar-shortcut-button' onClick={() => document.getElementById('timer-area').scrollIntoView({ behavior: 'smooth', scrollMarginTop: 90})}>Timer Area</button>
          <button class='navbar-shortcut-button' onClick={() => document.getElementById('12pm-area').scrollIntoView({ behavior: 'smooth'})}>12pm Area</button>
          <button class='navbar-shortcut-button' onClick={() => document.getElementById('5pm-area').scrollIntoView({ behavior: 'smooth'})}>5pm Area</button>
        </div>
        
        {/* <div class='layout-item'>
          <li>
            <Link to ="/fitnessSchedule">Fitness Schedule</Link>
          </li>
        </div> */}

        {/* <div class='layout-item'>
          <li>
            <Link to ="/aiobjects" class='link'>AiObjects</Link>
          </li>
        </div> */}

        {/* <div class='layout-item'>
          <li>
            <Link to="/discussionhome">Discussion Home</Link>
          </li>
        </div> */}

        {/* <div class='layout-item'>
          <li>
            <Link to="/discussion" class='link'>Discussion</Link>
          </li>
        </div> */}

        {/* <div class='layout-item'>
          <li>
            <Link to="/discussiontodo">DiscussionToDo</Link>
          </li>
        </div> */}

      </div>

    </div>
    </nav>

      <Outlet />
    </div>
  )
};

export default Layout;
