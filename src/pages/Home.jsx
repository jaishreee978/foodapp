import Hero from '../components/Hero';
import About from '../components/About';
import Categories from '../components/Categories';
import Menu from '../components/Menu';
import Offers from '../components/Offers';
import Reviews from '../components/Reviews';
import Contact from '../components/Contact';

const Home = ({ addToCart }) => {
  return (
    <>
      <Hero />
      <div id="about"><About /></div>
      <Categories />
      <div id="offers"><Offers /></div>
      <div id="menu"><Menu addToCart={addToCart} limit={4} title="Featured Products" /></div>
      <Reviews />
      <div id="contact"><Contact /></div>
    </>
  );
};

export default Home;
