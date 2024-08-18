import './App.css';
import SideBar from './components/SideBar';
import TopBar from './components/TopBar';
import Home from './pages/Home';
import Projects from './pages/Projects';
import NotFound from './pages/NotFound';
import About from './pages/About';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="flex">
        <SideBar />
        <div className='ms:ml-12 mm:ml-14 ml:ml-16 tb:ml-20 lp:ml-32 w-full'>
          <TopBar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/about" element={<About />} />
            <Route path="/*" element={<NotFound />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}


{/* <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
      </Routes> */}

export default App
