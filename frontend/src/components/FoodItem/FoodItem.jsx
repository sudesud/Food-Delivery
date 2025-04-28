import { useState } from 'react';
import PropTypes from 'prop-types'; // <<< prop-types import edildi
import './FoodItem.css';
import { assets } from '../../assets/assets';

const FoodItem = ({ id, name, price, description, image }) => {
  const [itemCount, setItemCount] = useState(0);

  return (
    <div className='food-item' data-id={id}>
      <div className="food-item-img-container">
        <img className='food-item-image' src={image} alt={name} />
        {
          !itemCount ? (
            <img
              className='add'
              onClick={() => setItemCount(prev => prev + 1)}
              src={assets.add_icon_white}
              alt="Add"
            />
          ) : (
            <div className='food-item-counter'>
              <img
                src={assets.remove_icon_red}
                onClick={() => setItemCount(prev => prev - 1)}
                alt="Remove"
              />
              <p>{itemCount}</p>
              <img
                src={assets.add_icon_green}
                onClick={() => setItemCount(prev => prev + 1)}
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
