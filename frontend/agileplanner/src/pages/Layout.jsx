import { Outlet, Link } from "react-router-dom";
import { ExpComponent } from "../Exp"; 
import './Layout.css' 
import '../Exp.css'

// see routetest for more details

const Layout = () => {

  function Sample () {
    return (
        <div class='nav-list'>
            <div>
              <Link to="/" class='home'>Home</Link>
            </div>
            <div>
              <Link to="/about" class='link'>About</Link>
            </div>
            <div>
              <Link to="/contact" class='link'>Contact Me 📫</Link>
            </div>
        </div>
    )
  }
  
  return (
    <div class='sticky-navbar'>
      <nav>

      {/* <Sample /> */}
      
      <div class='layout-grid'>
        
        <div class='empty-space'></div>

          <div class='exp-area'>
            <ExpComponent />
          </div>

          <div class='navbar-shortcuts'>
            <button class='navbar-shortcut-button' onClick={() => document.getElementById('phase-area').scrollIntoView({ behavior: 'smooth'})}>Phase Area</button>
            <button class='navbar-shortcut-button' onClick={() => document.getElementById('task-area').scrollIntoView({ behavior: 'smooth'})}>Task Area</button>
            {/* <button class='navbar-shortcut-button' onClick={() => document.getElementById('fitness-area').scrollIntoView({ behavior: 'smooth'})}>Fitness Area</button> */}
            <button class='navbar-shortcut-button' onClick={() => document.getElementById('timer-area').scrollIntoView({ behavior: 'smooth', scrollMarginTop: 90})}>Timer Area</button>
            <button class='navbar-shortcut-button' onClick={() => document.getElementById('twelve-pm-area').scrollIntoView({ behavior: 'smooth'})}>12pm Area</button>
            <button class='navbar-shortcut-button' onClick={() => document.getElementById('five-pm-area').scrollIntoView({ behavior: 'smooth'})}>5pm Area</button>
            <button class='navbar-shortcut-button' onClick={() => document.getElementById('story-area').scrollIntoView({ behavior: 'smooth'})}>Story Area</button>
          </div>
  
      </div>
    
      </nav>
        {/* <Outlet /> */}
    </div>
  )
};

export default Layout;
