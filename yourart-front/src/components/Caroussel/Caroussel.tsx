import React from 'react';
import Slider from 'react-slick';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import cn from 'classnames';
import styles from './Caroussel.module.scss';

type Props = {
  images: string[];
};

function SampleNextArrow(props: any) {
  const { className, onClick } = props;

  return (
    <div
      className={cn(className, styles.arrow, {
        [styles.hidden]: className.includes('slick-disabled'),
      })}
      style={{ right: -24 }}
      onClick={onClick}
    >
      <IoIosArrowForward size={48} />
    </div>
  );
}

function SamplePrevArrow(props: any) {
  const { className, onClick } = props;

  return (
    <div
      className={cn(className, styles.arrow, {
        [styles.hidden]: className.includes('slick-disabled'),
      })}
      onClick={onClick}
      style={{ left: -24 }}
    >
      <IoIosArrowBack size={48} />
    </div>
  );
}

const Caroussel = ({ images }: Props) => {
  const settings = {
    dots: true,
    infinite: false,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false,
        },
      },
    ],
  };

  return (
    <Slider {...settings} className={styles.container}>
      {images.map((image) => (
        <div key={image} className={styles.imageContainer}>
          <img src={image} alt="other artwork image" className={styles.image} />
        </div>
      ))}
    </Slider>
  );
};

export default Caroussel;
