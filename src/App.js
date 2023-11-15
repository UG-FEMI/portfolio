import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './page/homepage/Home';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
// const lazyHome = lazy(() => (import ('./page/homepage/Home')))


function App() {
  return (
    <div >
      <Navbar/>
      <Routes>

        <Route path='/' element={<Home/>}/>
        
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
