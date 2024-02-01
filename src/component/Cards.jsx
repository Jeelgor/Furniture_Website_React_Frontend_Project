import React from 'react';
import { Image } from 'react-bootstrap';
import PropTypes from 'prop-types'; // Correct import statement

const Card = ({ ImageSrc, title, price }) => {
    return (
        <div className="Allcards">
            <div className="card1">
                <Image src={ImageSrc} alt="banner" className="bannerimg" />
                <p>{title}</p>
                <p>{price}</p>
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
