import React from 'react';
import { Image } from 'react-bootstrap';
import PropTypes from 'prop-types'; // Correct import statement
import "../Styles/homeCard.css";

const Card = ({ ImageSrc, title, price }) => {
    return (
        <div className="flex justify-center">
            <div className="justify-center items-center h-[300px] w-[230px] shadow-[0_4px_8px_rgba(0,0,0,0.1)] transition-transform duration-[0.2s] ease-[ease-in-out] bg-neutral-100 cursor-pointer ml-[130px] mt-[30px] rounded-[20px] border-2 border-solid border-[black] hover:scale-105">
                <Image src={ImageSrc} alt="banner" className="flex h-[190px] w-[190px] relative justify-center" />
                <p className='text-2xl ml-[22px] to-black ' style={{textDecoration:'none'}}>{title}</p>
                <p className='text-2xl ml-[22px] to-black'>{price}</p>
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
