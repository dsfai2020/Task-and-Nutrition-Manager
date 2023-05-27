import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";


import Discussion from "./Discussion";
import DiscussionLayout from "./DiscussionLayout"
import DiscussionHome from "./DiscussionHome";

// This is actually the function that will be plugged into the index page.  It uses the Layout.jsx file to organize its structure.

export default function DiscussionRoutes() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<DiscussionLayout />}>
            <Route index element={<DiscussionHome />} />
            <Route path="discussion" element={<Discussion />} />
            {/* <Route path="*" element={<NoPage />} /> */}
          </Route>
        </Routes>
      </BrowserRouter>
    );
  }

