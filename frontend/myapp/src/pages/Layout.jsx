import { Outlet, Link } from "react-router-dom";

import './Layout.css' 

const Layout = () => {
  return (
    <>
    <nav>
    <div class='layout'>

      <div class='container'>
        <div class='layout-item'>
          <Link to="/">Home</Link>
        </div>

        <div class='layout-item'>
          <li>
            <Link to="/blogs">Blog</Link>
          </li>
        </div>
        
        <div class='layout-item'>
          <li>
            <Link to="/contact">Contact Me</Link>
          </li>
        </div>
        
        <div class='layout-item'>
          <li>
            <Link to ="/schedule">Schedule</Link>
          </li>
        </div>

        <div class='layout-item'>
          <li>
            <Link to ="/aiobjects">AiObjects</Link>
          </li>
        </div>

        <div class='layout-item'>
          <li>
            <Link to="/discussionhome">Discussion Home</Link>
          </li>
        </div>

        <div class='layout-item'>
          <li>
            <Link to="/discussion">Discussion</Link>
          </li>
        </div>

        <div class='layout-item'>
          <li>
            <Link to="/discussiontodo">DiscussionToDo</Link>
          </li>
        </div>

      </div>

    </div>
    </nav>

      <Outlet />
    </>
  )
};

export default Layout;
