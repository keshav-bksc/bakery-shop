import React, {useState, createContext, useEffect} from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Cakes from './components/Cakes/Cakes';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import myCakes from './data/cakes';
import './App.css';

export const AppContext = createContext();

const App = () => {
  const [cakesData, setCakesData] = useState(myCakes);
  const [cart, setCart] = useState(localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : []);

  const addToCart = (item) => {
    setCart((cart) => [...cart, item])
  }

  const removeFromCart = (id) => {
    const newCart = cart.filter((item) => (item.id !== id));
    setCart(newCart);
  }

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart])

  return (
    <AppContext.Provider value={{cakesData, cart, addToCart, removeFromCart}} >
      <Router>
      <div className='App'>
        <Navbar />
        <Routes>
          <Route path='/' element={<Cakes />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
      </div>
      </Router>
    </AppContext.Provider>
  )
}

export default App;