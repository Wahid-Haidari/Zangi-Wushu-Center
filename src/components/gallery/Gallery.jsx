import React from 'react';
import './Gallery.css';
import Image1 from '../../assets/img1.jpg';

const Gallery = () => {
    return(
        <div className="container container_gallary">
            <img className="gallary_image"src={Image1} alt="Image1"></img>
        </div>
    );
}

export default Gallery;