import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import Slider from 'react-slick'

import { images } from '../../../constants'
import s from './slider.module.scss'

function SampleNextArrow(props: any) {
  const { className, style, onClick } = props
  return (
    <div
      className={className}
      style={{ ...style, right: '1%', zIndex: '100' }}
      onClick={onClick}
    />
  )
}

function SamplePrevArrow(props: any) {
  const { className, style, onClick } = props
  return (
    <div
      className={className}
      style={{ ...style, left: '1%', zIndex: '100' }}
      onClick={onClick}
    />
  )
}

function SimpleSlider() {
  const settings = {
    arrows: false,
    infinite: true,
    speed: 500,
    autoplaySpeed: 4000,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  }
  return (
    <div className={s.container}>
      <Slider {...settings}>
        {images.map((item) => (
          <div className={s.imageContainer} key={item.src}>
            <img src={item.src} className={s.image} alt="image" />
          </div>
        ))}
      </Slider>
    </div>
  )
}

export default SimpleSlider
