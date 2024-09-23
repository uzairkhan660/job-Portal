import "./App.css";
import BackDash from "./Components/BackDash";
import Categories from "./Components/Categories";
import Featured from "./Components/Featured";
import Footer from "./Components/Footer";
import LatestJob from "./Components/LatestJob";
import Logo from "./Components/Logo";
import NavBar from "./Components/NavBar";
import Section1 from "./Components/Section1";
const HomePage = () => {
  return (
    <div>
      <NavBar/>
      <Section1/>
      <Logo/>
      <Categories/>
      <BackDash/>
      <Featured/>
      <LatestJob/>
      <Footer/>
    </div>
  )
}

export default HomePage
