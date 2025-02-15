import React from 'react'

const WomensCollection = (props) => {
    
    const {title, image1, image2, image3, image4, image5, image6} =props.womensFashion

  return (
    <div className='Collection'>
        <h2>{title}</h2>
        <div className="womensBanner">
            <img src="assets/womemnsBanner.jpg" alt="Womens Banner" />
        </div>
        <div className="mensImage">
          <img src={image1} alt={title} />
          <img src={image2} alt={title} />
          <img src={image3} alt={title} />
          <img src={image4} alt={title} />
          <img src={image5} alt={title} />
          <img src={image6} alt={title} />
        </div>
    </div>
  )
}

export default WomensCollection