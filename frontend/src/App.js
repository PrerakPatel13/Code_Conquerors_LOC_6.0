import "./App.css";
import Header from "./components/common/header/Header";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import About from "./components/about/About";
import CourseHome from "./components/allcourses/CourseHome";
import Team from "./components/team/Team";
import Pricing from "./components/pricing/Pricing";
import Blog from "./components/blog/Blog";
import Contact from "./components/contact/Contact";
import Footer from "./components/common/footer/Footer";
import Home from "./components/home/Home";
import SignInForm from "./components/login/SignInForm";
import Meeting from './components/meeting/meeting.jsx';
import Bot from './Bot.js'
import NotesApp from "./components/Notesapp.js";
import Preferences from "./components/Preferences.js";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/bot" element={<Bot/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/courses" element={<CourseHome/>} />
          <Route path="/team" element={<Team/>} />
          <Route path="/pricing" element={<Pricing/>} />
          <Route path="/journal" element={<Blog/>} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="/signedin" element={<SignInForm/>}/>
          <Route path="/meeting" element={<Meeting/>}/>
          <Route path="/notes" element={<NotesApp/>}/>
          <Route path="/pref" element={<Preferences/>}/>

        </Routes>

        <Footer />
      </Router>
    </>
  );
}

export default App;
