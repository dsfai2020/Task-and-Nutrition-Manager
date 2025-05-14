import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Home from "./Home";
import Blogs from "./Blogs";
import Contact from "./Contact";
import NoPage from "./NoPage";

import FitnessSchedule from "./FitnessSchedule";
import AiObjects from "./AiObjects";

import DiscussionToDoList from "./DiscussionToDo";
import Discussion from "./Discussion";
import DiscussionHome from "./DiscussionHome";
import About from "./About";

// This is actually the function that will be plugged into the index page.  It uses the Layout.jsx file to organize its structure.

export default function MyRoutes() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path='about' element={<About />} />
            <Route path="blogs" element={<Blogs />} />
            <Route path="contact" element={<Contact />} />
            <Route path="*" element={<NoPage />} />
            <Route path="fitnessSchedule" element={<FitnessSchedule />} />
            <Route path="aiobjects" element={<AiObjects />} />
            <Route path='discussiontodo' element={<DiscussionToDoList />} />
            <Route path='discussionhome' element={<DiscussionHome />} />
            <Route path="discussion" element={<Discussion />} />
            
          </Route>
        </Routes>
      </BrowserRouter>
    );
  }

