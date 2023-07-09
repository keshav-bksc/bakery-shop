import React, {useState, useContext} from 'react';
import {GiHamburgerMenu} from 'react-icons/gi';
import {GrClose} from 'react-icons/gr';
import {MdOutlineShoppingCartCheckout} from 'react-icons/md';
import { Link } from 'react-router-dom';
import { AppContext } from '../../App';
import './Navbar.css';

const Navbar = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  const {cart} = useContext(AppContext)

  const printCheckedOutItems = () => {
    const numOfItems = cart.length;
    if(numOfItems === 0) {
      console.log('You have 0 items present in your cart.');
    } else {
      console.log(`You have ${numOfItems} ${numOfItems === 1 ? 'item' : 'items'} present in your cart.`);
      console.log('Items:', cart);
    }
  }

  return (
    <nav className='navbar'>
      <div className='logo'>
        <h2>
          <span>M</span>y
          <span>B</span>akery
        </h2> 
      </div>
      <div className={showMobileMenu ? 'menu mobile-menu' : 'menu'}>
        <ul>
          <Link to='/' className='link'>
            <li className='menu-item'>Home</li>
          </Link >
          <Link to='/about' className='link'>
            <li className='menu-item'>About</li>
          </Link>
          <Link to='/contact' className='link'>
            <li className='menu-item'>Contact</li>
          </Link>
            <li className='menu-item' onClick={printCheckedOutItems}>
              <MdOutlineShoppingCartCheckout />{`Checkout(${cart.length})`}
            </li>
        </ul>
        <div className='hamburger-menu' onClick={() => setShowMobileMenu(!showMobileMenu)}>
          {showMobileMenu ? <GrClose /> : <GiHamburgerMenu />}
        </div>
      </div>
    </nav>
  )
}

export default Navbar;
