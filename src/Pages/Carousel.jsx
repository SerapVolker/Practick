  import React from 'react';
  import Slider from 'react-slick';
  import "slick-carousel/slick/slick.css"; 
  import "slick-carousel/slick/slick-theme.css";
  import Sliders from '../Photo/Slider.svg';
  import Arsen from '../Photo/i.webp'
  import Negr from '../Photo/hegr.webp'

  const SimpleCarousel = () => {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 3000,
    };

    return (
      <div style={{ maxWidth: '1550px', margin: 'auto' }}>
      
        <Slider {...settings}>
          <div>
      
            <img src={Sliders} alt="Описание 1" style={{ width: '100%' }} />
          </div>
          <div>
            
            <img src={Arsen} alt="Описание 2" style={{ width: '1550px',height: '560px' }} />
          </div>
          <div>
        
            <img src={Negr} alt="Описание 3" style={{ width: '1550px',height: '560px' }} />
          </div>
          
        </Slider>
      </div>
    );
  };

  export default SimpleCarousel;
