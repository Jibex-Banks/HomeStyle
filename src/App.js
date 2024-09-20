import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './COMPONENT/Header';
// import { CartProvider } from './COMPONENT/CartContext';
import Home from './COMPONENT/Home';
import DesignStyleViewer from './COMPONENT/DesignStyleViewer';
import Top from './COMPONENT/Top';
import Product from './COMPONENT/Products';
import Gallery from './COMPONENT/Gallery';
import Contact from './COMPONENT/Contact';
import Feedback from './COMPONENT/Feedback';
import Philosophy from './COMPONENT/Philosophy';
import Footer from './COMPONENT/Footer';
import About from './COMPONENT/About';
import SiteMap from './COMPONENT/SiteMap';


function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/home" element={<Home />} />
          <Route path="/Top" element={<Top />} />
          <Route path="/Philosophy" element={<Philosophy />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/Feedback" element={<Feedback />} />
          <Route path="/DesignStyleViewer" element={<DesignStyleViewer />} />
          <Route exact path="/gallery" element={<Gallery />} />
          <Route exact path="/product" element={<Product />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/contact" element={<Contact />} />
          <Route exact path="/SiteMap" element={<SiteMap />} />
        </Routes>
        <Footer />
      </div>
    </Router>
   
  );
}

export default App;
