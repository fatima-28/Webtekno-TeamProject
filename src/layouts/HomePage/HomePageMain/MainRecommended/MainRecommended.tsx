import "./MainRecommended.scss";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import CarouselCard from "../../../../components/CarouselCard/CarouselCard";
//test
export const MainRecommended = () => {

  const responsive = {
    superLargeDesktop: {

      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <>
      <div className="recommended">
        <div className="header">Önərilənlər </div>
        <div className="carousel">
          <Carousel 
            infinite
            ssr={true}
            responsive={responsive}
            containerClass="carousel-container"
           > 
            <CarouselCard/>
            <CarouselCard/>
            <CarouselCard/>
            <CarouselCard/>
            <CarouselCard/>
            <CarouselCard/>
            
          </Carousel>
        </div>
      </div>
    </>
  )
}
