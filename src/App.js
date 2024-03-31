

import React,{useState} from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import AboutUs from './Components/AboutUs';
import ContactUs from './Components/ContactUs';
import Home from './Components/Home';
import Footer from './Components/Footer';
import SearchResults from './Components/SearchResults';

function App() {
  const [data, setData] = useState([])
  console.log(data, 'app')
  return (
    <Router>
      <div>
        <Navbar setData={setData}/>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path='/searchresults' element={<SearchResults data={data}/>}/>
        </Routes>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
