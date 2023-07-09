import React, {useState, useContext} from 'react';
import { AppContext } from '../../App';
import './Cake.css';

const Cake = ({cakeData}) => {
  const [addedToCart, setAddedToCart] = useState(localStorage.getItem(cakeData.id) ? JSON.parse(localStorage.getItem(cakeData.id)) : false);
    
  const {addToCart, removeFromCart} = useContext(AppContext);

  const handleAddToCart = () => {
    if(addedToCart === false) {
      addToCart(cakeData);
      setAddedToCart(true);
      localStorage.setItem(cakeData.id, true);
    }
  }

  const handleDeleteFromCart = () => {
    if(addedToCart === true) {
      removeFromCart(cakeData.id);
      setAddedToCart(false);
      localStorage.setItem(cakeData.id, false);
    }
  }

  return (
    <div className='cake'>
      <img src={cakeData.image} />
      <h2>{cakeData.name}</h2>
      <h2>{cakeData.price}</h2>
      {
        (addedToCart === false) &&
          <button 
            onClick={handleAddToCart}
            className='add'
          >
            {(addedToCart) ? 'Item added' : 'Add to Cart'} 
          </button>
      }
      {
        addedToCart && 
        <button
          onClick={handleDeleteFromCart}
          className='remove'
        >
          Delete from Cart
        </button>
      }
    </div>
  )
}

export default Cake;
