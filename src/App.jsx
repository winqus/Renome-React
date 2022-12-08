/* eslint-disable react/no-unescaped-entities */
import Navbar from './components/organisms/Navbar';
import Carousel from './components/organisms/Carousel';
import About from './components/organisms/About';

function App() {
  return (
    <>
      <Navbar title="Renome" />
      <Carousel />
      <About title="about" subtitle="WE CREATE DELICIOUS MEMORIES">
        Renome it is renowned restaurant delights the senses with elegant
        ambiance, gracious service and delectable menus in the heart of
        Manhattan's. The distinctive setting boasts contemporary furnishings and
        finishes atop the restaurant's grand modern architecture. Renome offers
        the room for private dining where guests enjoy creative foods and
        sumptuous late night desserts. Is one of the few Manhattan restaurants
        to have a coveted 3-star Michelin rating.
      </About>
    </>
  );
}

export default App;
