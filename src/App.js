import { Footer } from "antd/es/layout/layout";
import FirstCarouselPage from "./components/FirstCarouselPage";
import FooterPage from "./components/FooterPage";
import HeroPage from "./components/HeroPage";
import Navbar from "./components/Navbar";
import PageFour from "./components/PageFour";
import PageSeven from "./components/PageSeven";
import PageSix from "./components/PageSix";
import SecondCarouselPage from "./components/SecondCarouselPage";
import SubFooter from "./components/SubFooter";

function App() {
  return (
    <>
      <Navbar />
      <HeroPage />
      <FirstCarouselPage />
      <PageFour />
      <SecondCarouselPage />
      <PageSix />
      <PageSeven />
      <FooterPage />
      <SubFooter />
    </>
  );
}

export default App;
