import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Home from "./Home";
import Blogs from "./Blogs";
import Contact from "./Contact";
import NoPage from "./NoPage";

import Schedule from "./Schedule";
import AiObjects from "./AiObjects";

import DiscussionToDoList from "./DiscussionToDo";
import Discussion from "./Discussion";
import DiscussionHome from "./DiscussionHome";

// This is actually the function that will be plugged into the index page.  It uses the Layout.jsx file to organize its structure.

export default function MyRoutes() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="blogs" element={<Blogs />} />
            <Route path="contact" element={<Contact />} />
            <Route path="*" element={<NoPage />} />
            <Route path="schedule" element={<Schedule />} />
            <Route path="aiobjects" element={<AiObjects />} />
            <Route path='discussiontodo' element={<DiscussionToDoList />} />
            <Route path='discussionhome' element={<DiscussionHome />} />
            <Route path="discussion" element={<Discussion />} />
            
          </Route>
        </Routes>
      </BrowserRouter>
    );
  }

