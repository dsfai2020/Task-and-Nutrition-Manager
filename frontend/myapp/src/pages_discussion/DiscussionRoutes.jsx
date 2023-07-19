import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";


import Discussion from "./Discussion";
import DiscussionLayout from "./DiscussionLayout";
import DiscussionHome from "./DiscussionHome";
import ToDoList from "./DiscussionToDo";

// This is actually the function that will be plugged into the index/layout page.  It uses the Layout.jsx file to organize its structure.

export default function DiscussionRoutes() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<DiscussionLayout />}>
            <Route index element={<DiscussionHome />} />
            <Route path="discussion" element={<Discussion />} />
            <Route path="discussiontodo" element={<ToDoList />} />
            {/* <Route path="*" element={<NoPage />} /> */}
          </Route>
        </Routes>
      </BrowserRouter>
    );
  }

