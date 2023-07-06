import { Outlet, Link } from "react-router-dom";

const DiscussionLayout = () => {
  return (
    <>
    <div class='layout'>
      <nav>
        <li>
          <Link to="/">Discussion Home</Link>
        </li>
      <div class="layout-item">
        <li>
            <Link to="/discussion">Discussion</Link>
        </li>
      </div>
      <div class="layout-item">
        <li>
            <Link to="/discussiontodo">DiscussionToDo</Link>
        </li>
      </div>
      </nav>
      </div>

      <Outlet />
    </>
  )
};

export default DiscussionLayout;
