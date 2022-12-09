import "./MainRecommended.scss";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import carouselimg1 from "../../../../images/iphone.png";

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
        <div className="header">Çox Satılanlar </div>
        <div className="carousel">
          <Carousel 
            infinite
            ssr={true}
            responsive={responsive}
            containerClass="carousel-container"
           > 
            <div className="carousel-card">
              <div className="img">
                <img src={carouselimg1} alt="" />
              </div>
              <div className="desc">
                <h5>iPhone 13 mini 128 GB | Pink (çəhrayı)</h5>
                <p className="price-product">null</p>
              </div>
            </div>
            <div className="carousel-card">
              <div className="img">
                <img src={carouselimg1} alt="" />{" "}
              </div>
              <div className="desc">
                <h5>iPhone 13 mini 128 GB | Pink (çəhrayı)</h5>
                <p className="price-product">null</p>
              </div>
            </div>
            <div className="carousel-card">
              <div className="img">
                <img src={carouselimg1} alt="" />{" "}
              </div>
              <div className="desc">
                <h5>iPhone 13 mini 128 GB | Pink (çəhrayı)</h5>
                <p className="price-product">null</p>
              </div>
            </div>
            <div className="carousel-card">
              <div className="img">
                <img src={carouselimg1} alt="" />{" "}
              </div>
              <div className="desc">
                <h5>iPhone 13 mini 128 GB | Pink (çəhrayı)</h5>
                <p className="price-product">null</p>
              </div>
            </div>
            <div className="carousel-card">
              <div className="img">
                <img src={carouselimg1} alt="" />{" "}
              </div>
              <div className="desc">
                <h5>iPhone 13 mini 128 GB | Pink (çəhrayı)</h5>
                <p className="price-product">null</p>
              </div>
            </div>
          </Carousel>
        </div>
      </div>
    </>
  )
}