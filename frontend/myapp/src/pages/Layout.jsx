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
        <Link to="/blogs">Blogs</Link>
      </div>
         
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to ="/schedule">Schedule</Link>
          </li>
      </nav>
      </div>

      <Outlet />
    </>
  )
};

export default Layout;
