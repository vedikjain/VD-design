// import logo from './logo.svg';
import { BrowserRouter as Router, Routes , Route } from 'react-router-dom';
import './App.css';
import Navbar from './comaponent/inc/Navbar';
import ScrollToTop from './comaponent/inc/ScrollTop';
import Bottom from './comaponent/inc/Bottom';
import About from './comaponent/pages/About';
import Home from './comaponent/pages/Home';
import Portfolio from './comaponent/pages/Portfolio';
import Contact from './comaponent/pages/Contact';





function App() {
  return (
    <Router>
      <div>
      <ScrollToTop/>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/About' element={<About />} />
        <Route path='/Contact' element={<Contact/>} />
        <Route path='/Portfolio' element={<Portfolio/>} />
      
       
      </Routes>
      <Bottom />
     
      </div>
    </Router>
  );
}

export default App;
