import HeaderSlider from "../../components/Header/HeaderSlider/HeaderSlider";
import { MainBestSellers } from "./HomePageMain/MainBestSellers/MainBestSellers";
import { MainCustomerService } from "./HomePageMain/MainCustomerService/MainCustomerService";
import MainPageBanner from "./HomePageMain/MainPageBanner/MainPageBanner";
import MainPageContainer from "./HomePageMain/MainPageContainer/MainPageContainer";

const HomePage = () => {
  return (
    <div className="homepage">
      <HeaderSlider />
      <MainCustomerService />
      <MainBestSellers />
      <MainPageBanner />
      <MainPageContainer/>

    </div>
  )
}

export default HomePage
