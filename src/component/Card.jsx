import React from 'react';
import { Image } from 'react-bootstrap';
import PropTypes from 'prop-types'; // Correct import statement
import "../Styles/homeCard.css";

const Card = ({ ImageSrc, title, price }) => {
    return (
        <div className="Allcards">
            <div className="card1">
                <Image src={ImageSrc} alt="banner" className="bannerimg" />
                <p className='titletxt'>{title}</p>
                <p className='priceitem'>{price}</p>
            </div>
        </div>
    );
};

Card.propTypes = {
    ImageSrc: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
};

export default Card;
