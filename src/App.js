import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Banner from './components/Banner';
import Cards from './components/Cards';
import AboutUs from './components/aboutus';
import Whychooseus from './components/whychooseus';
import Healing from './components/healing';
import RhombusCardContainer from './components/rhombuscard';
import Carousel from './components/carousel';
import Appointment from './components/Appointment';
import Review from './components/review';
import Frame from './components/frame';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Banner />
      <Cards />
      <AboutUs />
      <Whychooseus />
      <Healing />
      <RhombusCardContainer />
      <Carousel />
      <Appointment />
      <Review />
      <Frame />
    </div>
  );
}

export default App;
