import React from 'react';
import { FaSearch } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import menu from '../assets/menu.png';
import review from '../assets/review.png';
import info from '../assets/info.png';
import cart from '../assets/cartred.png';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const RestaurantDisplay = ({ restaurant }) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 10000,
    pauseOnHover: false,
    pauseOnFocus: false,
  };

  return (
    <div>
      <div>
        <h1>{restaurant.name}</h1>
        <div>
          <FaSearch />
          <p>Search in {restaurant.name}</p>
        </div>
      </div>
      <div>
        <ul>
          <Link to="#">
            <img src={menu} alt="Menu" />
            <p>Menu</p>
          </Link>
          <Link to="#">
            <img src={review} alt="Review" />
            <p>Review</p>
          </Link>
          <Link to="#">
            <img src={info} alt="Information" />
            <p>Information</p>
          </Link>
          <Link to="#">
            <img src={cart} alt="My Cart" />
            <p>My Cart</p>
          </Link>
        </ul>

        <Slider {...settings}>
          {restaurant.menu.map((menuItem, index) => (
            <div key={index}>
              <h3>{menuItem}</h3>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default RestaurantDisplay;
