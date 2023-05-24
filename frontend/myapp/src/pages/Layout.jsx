import { Outlet, Link } from "react-router-dom";

import './Layout.css' 

const Layout = () => {
  return (
    <>
    <div class='layout'>
      <nav>
      <div class="layout-item">
        <Link to="/">Home</Link>
      </div>
      <div class="layout-item">
        <li><Link to="/blogs">Blogs</Link>
        </li>
      </div>
         
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to ="/schedule">Schedule</Link>
          </li>
          <li>
            <Link to ="/aiobjects">AiObjects</Link>
          </li>
      </nav>
      </div>

      <Outlet />
    </>
  )
};

export default Layout;
