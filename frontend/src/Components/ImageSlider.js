import React, { useState } from 'react'

const ImageSlider = ({ slides }) => {
  const [index, setIndex] = useState(0);
  const sliderStyles = {
    height: '100%',
    position: 'relative'
  }
  const slideStyles = {
    width: '100%',
    height: '100%',
    borderRadius: '10px',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundImage: `url(${slides[index].url})`
  };
  const rightArrow = {
    position: 'absolute',
    top: '50%',
    transform: 'translate(0,-50)',
    right: '32px',
    fontSize: '45px',
    color: '#fff',
    zIndex: 1,
    cursor: 'pointer',
    color: 'black'
  }
  const leftArrow = {
    position: 'absolute',
    top: '50%',
    transform: 'translate(0,-50)',
    left: '32px',
    fontSize: '45px',
    color: '#fff',
    zIndex: 1,
    cursor: 'pointer',
    color: 'black'
  }
  const goToPrevious = () => {
    const newIndex = (index === 0) ? slides.length - 1 : index - 1;
    setIndex(newIndex);
  }
  const goToNext = () => {
    const newIndex = (index === slides.length - 1) ? 0 : index + 1;
    setIndex(newIndex);
  }
  return (
    <div style={sliderStyles}>
      <div onClick={goToNext} style={rightArrow}>⇒</div>
      <div onClick={goToPrevious} style={leftArrow}>⇐</div>
      <div
        style={slideStyles}>

      </div>
    </div>
  )
}

export default ImageSlider