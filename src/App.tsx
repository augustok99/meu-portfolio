import "./index.css";
import Header from "./components/Header/Header";
import { ThemeProvider } from "./context/ThemeProvider";
import { InViewProvider } from "./context/InViewContext";
import Hero from "./components/Hero/Hero";
import Button from "./components/Button/Button";
import Text from "./components/Text/Text";
import TechCarousel from "./components/TechCarousel/TechCarousel";
import CardProject from "./components/CardProject/CardProject";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <InViewProvider>
      <ThemeProvider>
        <div className="min-h-screen">
          <Header />
          <Hero />
          <Button />
          <Text />
          <TechCarousel />
          <CardProject />
          <div className="relative overflow-hidden bg-linear-to-r md:from-[#00BC7D]  md:to-[#1f855c] xl:pb-60 md:mb-38 xl:pt-35 mt-[10rem]">
            <About />
          </div>
          <Contact />
          <Footer />
        </div>
      </ThemeProvider>
    </InViewProvider>
  );
}

export default App;
