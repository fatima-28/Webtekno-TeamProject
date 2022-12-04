import './HeaderSlider.scss'
//? Icons
import sliderimg1 from '../../../images/airpodsmax.jpg'
import sliderimg2 from '../../../images/galaxynote20.jpg'
import sliderimg3 from '../../../images/iphone12promax.jpg'

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

const HeaderSlider = () => {
  
  return (
    <>
      <Carousel>
        <div>
          <img src={sliderimg1} alt="" />
        </div>
        <div>
          <img src={sliderimg2} alt='' />
        </div>
        <div>
          <img src={sliderimg3} alt='' />
        </div>
      </Carousel>
    </>
  )

}

export default HeaderSlider
