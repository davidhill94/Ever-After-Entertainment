import './App.css';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './pages/home';
import About from './pages/about';
import Packages from './pages/packages';
import Princesses from './pages/princesses';
import Bookings from './pages/bookings';
import Gallery from './pages/gallery';
import Testimonial from './pages/testimonials';
import React, {useState} from 'react';
import Sidebar from './components/Sidebar/Sidebar';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';

function App() {
  const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen)
    }
  return (
    <BrowserRouter className="App">
      <Navbar toggle={toggle} />
      <Sidebar toggle={toggle} isOpen={isOpen} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/packages" element={<Packages />} />
        <Route path="/princesses" element={<Princesses />} />
        <Route path="/bookings" element={<Bookings />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/testimonials" element={<Testimonial />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
