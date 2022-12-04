import HeaderSlider from "../../components/Header/HeaderSlider/HeaderSlider";
import { MainCustomerService } from "../../components/Mains/HomePageMain/MainCustomerService/MainCustomerService";

const HomePage = () => {
  return (
    <div className="homepage">
      <HeaderSlider />
      <MainCustomerService />
    </div>
  )
}

export default HomePage
