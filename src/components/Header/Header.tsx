import './Header.scss'
import './HeaderMedia.scss'
//? Icons
// import {RxHamburgerMenu} from 'react-icons/'

import sliderimg1 from './Assets/airpodsmax.jpg'
import sliderimg2 from './Assets/galaxynote20.jpg'
import sliderimg3 from './Assets/iphone12promax.jpg'
import Navbars from './Navbars/Navbars'

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';


const Header = () => {

  return (
    <>
      <Navbars />
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

export default Header
