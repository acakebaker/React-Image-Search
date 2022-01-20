import './ImageList.css';
import React from 'react';
import ImageCard from './ImageCard';

const ImageList = ({ images }) => {
  // Sends the individual image id and image to the ImageCard.
  const image = images.map((image, id) => {
    return <ImageCard key={id} image={image} />
  });

  return <div className='image-list'>{image}</div>;
};

export default ImageList;
