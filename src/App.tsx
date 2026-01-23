import "./index.css";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Button from "./components/Button/Button";
import Text from "./components/Text/Text";
import TechCarousel from "./components/TechCarousel/TechCarousel";
import CardProject from "./components/CardProject/CardProject";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";

function App() {
  return (
    <div className="min-h-screen bg-[#0e0930]">
      <Header />
      <Hero />
      <Button />
      <Text />
      <TechCarousel />
      <CardProject />
      <About />
      <Contact />
    </div>
  );
}

export default App;
