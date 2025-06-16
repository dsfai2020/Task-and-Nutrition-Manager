import { Outlet, Link } from "react-router-dom";
import { ExpComponent } from "../Exp"; 
import './Layout.css' 
import '../Exp.css'

// see routetest for more details

const Layout = () => {
  
  return (
    <div class='sticky-navbar'>
    <nav>

    {/* <div class='nav-container'> */}

    <div class='layout-grid'>
      
      <div class='nav-list'>
        <div class='layout-item'>
          <Link to="/" class='home'>Home</Link>
        </div>

        <div class='layout-item'>
          <li>
            <Link to="/about" class='link'>About</Link>
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
      </div>

        <div class='exp-area'>
          <ExpComponent />
        </div>

        <div class='navbar-shortcuts'>
          <button class='navbar-shortcut-button' onClick={() => document.getElementById('phase-area').scrollIntoView({ behavior: 'smooth'})}>Phase Area</button>
          <button class='navbar-shortcut-button' onClick={() => document.getElementById('task-area').scrollIntoView({ behavior: 'smooth'})}>Task Area</button>
          <button class='navbar-shortcut-button' onClick={() => document.getElementById('story-area').scrollIntoView({ behavior: 'smooth'})}>Story Area</button>
          {/* <button class='navbar-shortcut-button' onClick={() => document.getElementById('fitness-area').scrollIntoView({ behavior: 'smooth'})}>Fitness Area</button> */}
          <button class='navbar-shortcut-button' onClick={() => document.getElementById('timer-area').scrollIntoView({ behavior: 'smooth', scrollMarginTop: 90})}>Timer Area</button>
          <button class='navbar-shortcut-button' onClick={() => document.getElementById('12pm-area').scrollIntoView({ behavior: 'smooth'})}>12pm Area</button>
          <button class='navbar-shortcut-button' onClick={() => document.getElementById('5pm-area').scrollIntoView({ behavior: 'smooth'})}>5pm Area</button>
        </div>
 

    </div>
  
    </nav>
      <Outlet />
    </div>
  )
};

export default Layout;
