import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import img1 from './imagesCarousel/1.png';
import img2 from './imagesCarousel/2.png';
import img3 from './imagesCarousel/3.png';
import img4 from './imagesCarousel/4.png';
import img5 from './imagesCarousel/5.png';
import { SlideImage, ImgDiv } from './CarouselStyles';

function Carousel() {
    const settings = {
      dots: true, // Mostrar os pontos de navegação
      infinite: true, // Loop infinito
      speed: 500, // Velocidade da transição
      slidesToShow: 1, // Quantidade de slides a serem mostrados ao mesmo tempo
      slidesToScroll: 1, // Quantidade de slides a serem movidos ao navegar
      autoplay: true, // Habilita o autoplay
    autoplaySpeed: 5000, // Define o intervalo de tempo (5 segundos)
    };
  
    return (
        <>
        <Slider {...settings}>
          <ImgDiv>
            <SlideImage src={img1} alt="Banner Saint'Ana laboratório clínico" />
          </ImgDiv>
          <ImgDiv>
            <SlideImage src={img2} alt="Banner vacina herpes zoster" />
          </ImgDiv>
          <ImgDiv>
            <SlideImage  src={img3} alt="Banner exame de sexagem fetal " />
          </ImgDiv>
          <ImgDiv>
            <SlideImage  src={img4} alt="Banner doação de sangue" />
          </ImgDiv>
          <ImgDiv>
            <SlideImage src={img5} alt="Banner exame domiciliar" />
          </ImgDiv>
        </Slider>
        </>
    );
  }
  
  export default Carousel;
  