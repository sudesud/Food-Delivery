import { useContext } from 'react';
import PropTypes from 'prop-types'; // <<< prop-types import edildi
import './FoodItem.css';
import { assets } from '../../assets/assets';
import { StoreContext } from '../../context/StoreContext'; 

const FoodItem = ({ id, name, price, description, image }) => {
  
   const{cartItems,addToCart,removeFromCart}=useContext(StoreContext);
  return (
    <div className='food-item' data-id={id}>
      <div className="food-item-img-container">
        <img className='food-item-image' src={image} alt={name} />
        {
          !cartItems[id] ? (
            <img
              className='add'
              
              onClick={() => addToCart(id)}
              src={assets.add_icon_white}
              alt="Add"
            />
          ) : (
            <div className='food-item-counter'>
              <img
                src={assets.remove_icon_red}
                onClick={() => removeFromCart(id)}
                alt="Remove"
              />
              <p>{cartItems[id]}</p>
              <img
                src={assets.add_icon_green}
                onClick={() => addToCart(id)}
                alt="Add"
              />
            </div>
          )
        }
      </div> 
      <div className="food-item-info">
        <div className="food-item-name">
          <p>{name}</p>
        </div>
        <p className="food-item-desc">{description}</p>
        <p className="food-item-price">${price}</p>
      </div>
    </div>
  );
};

// >>>>>>> BURASI YENİ EKLENDİ <<<<<<<
FoodItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

export default FoodItem;
