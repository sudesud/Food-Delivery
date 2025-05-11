import { useContext } from 'react';
import PropTypes from 'prop-types'; // << prop-types import edildi
import './FoodDisplay.css';
import { StoreContext } from '../../context/StoreContext';
import FoodItem from '../FoodItem/FoodItem';

const FoodDisplay = ({ category }) => {
  const { food_list } = useContext(StoreContext);

  const filteredFoodList = food_list.filter(item =>
    category === "All" || item.category === category
  );

  return (
    <div className='food-display' id='food-display'>
      <h2>Top Dishes near you</h2>
      <div className="food-display-list">
        {filteredFoodList.map((item, index) => (
          

          <FoodItem
            key={index}
            id={item._id}
            name={item.name}
            description={item.description}
            price={item.price}
            image={item.image}
          />
        ))}
      </div>
    </div>
  );
};

// >>>>>>> BURASI YENİ EKLENDİ <<<<<<<
FoodDisplay.propTypes = {
  category: PropTypes.string.isRequired,
};

export default FoodDisplay;
