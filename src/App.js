
import './App.css';
import Navbar from './components/Navbar/Navbar'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './components/Pages/Home'
import Contact from './components/Pages/Contact/Contact'
import About from './components/Pages/About'
import Blog from './components/Pages/Blog'


function App() {


  return (
    <div className="Wrapper">
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/about' element={<About />} />
          <Route path='/blog' element={<Blog />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
