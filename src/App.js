import './App.css';
import Home from './HomePage/ParentComponent';
import Navbar from './Navbar/Navbar';
import AboutUs from './AboutUs/AboutUs';
import CarouselPage from './CarouselPage/CarouselPage';
import ThreeCardsComponent from './ThreeCardsComponent/ThreeCardsComponent';
import ContactUsPage from './ContactUsPage/ContactUsPage';
import Footer from './Footer/Footer';


function App() {
  return (
    <div className="container-main">
    <Navbar/>
    <Home />
    <AboutUs/>
    <ThreeCardsComponent/>
    <CarouselPage/>
    <ContactUsPage/>
    <Footer/>
    </div>
  );
}

export default App;
