import { Outlet, Link } from "react-router-dom";

import './Layout.css' 

// see routetest for more details

const Layout = () => {
  return (
    <>
    <nav>
    <div class='layout'>

      <div class='container'>
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
            <Link to="/blogs" class='link'>Blog</Link>
          </li>
        </div>
        
        <div class='layout-item'>
          <li>
            <Link to="/contact" class='link'>Contact Me</Link>
          </li>
        </div>
        
        {/* <div class='layout-item'>
          <li>
            <Link to ="/fitnessSchedule">Fitness Schedule</Link>
          </li>
        </div> */}

        <div class='layout-item'>
          <li>
            <Link to ="/aiobjects" class='link'>AiObjects</Link>
          </li>
        </div>

        {/* <div class='layout-item'>
          <li>
            <Link to="/discussionhome">Discussion Home</Link>
          </li>
        </div> */}

        <div class='layout-item'>
          <li>
            <Link to="/discussion" class='link'>Discussion</Link>
          </li>
        </div>

        {/* <div class='layout-item'>
          <li>
            <Link to="/discussiontodo">DiscussionToDo</Link>
          </li>
        </div> */}

      </div>

    </div>
    </nav>

      <Outlet />
    </>
  )
};

export default Layout;
