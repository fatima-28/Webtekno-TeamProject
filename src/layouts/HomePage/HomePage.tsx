import HeaderSlider from "../../components/Header/HeaderSlider/HeaderSlider";
import { MainBestSellers } from "./HomePageMain/MainBestSellers/MainBestSellers";
import { MainCustomerService } from "./HomePageMain/MainCustomerService/MainCustomerService";


const HomePage = () => {
  return (
    <div className="homepage">
      <HeaderSlider />
      <MainCustomerService />
      <MainBestSellers/>

    </div>
  )
}

export default HomePage
