import "./index.css";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Button from "./components/Button/Button";
import Text from "./components/Text/Text";
import TechCarousel from "./components/TechCarousel/TechCarousel";
import CardProject from "./components/CardProject/CardProject";

function App() {
  return (
    <div className="min-h-screen bg-gray-950">
      <Header />
      <Hero />
      <Button />
      <div>
        <Text />
        <TechCarousel />
        <CardProject />
      </div>
    </div>
  );
}

export default App;
