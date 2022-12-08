/* eslint-disable react/no-unescaped-entities */
import Navbar from './components/organisms/Navbar';
import Carousel from './components/organisms/Carousel';
import About from './components/organisms/About';
import Gallery from './components/organisms/Gallery';
import GalleryImage from './components/atoms/GalleryImage';

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

      <Gallery title="gallery" subtitle="MORE ABOUT US VIA PHOTOS">
        <GalleryImage src={`${process.env.PUBLIC_URL}/img/gallery_img_1.png`} alt="Caffe bar" />
        <GalleryImage src={`${process.env.PUBLIC_URL}/img/gallery_img_3.png`} alt="Tables inside caffe bar" />
        <GalleryImage src={`${process.env.PUBLIC_URL}/img/gallery_img_2.png`} alt="Old building basking in sunlight" />
        <GalleryImage src={`${process.env.PUBLIC_URL}/img/gallery_img_6.png`} alt="Buttermilk donuts" />
        <GalleryImage src={`${process.env.PUBLIC_URL}/img/gallery_img_5.png`} alt="Salad in a bowl" />
        <GalleryImage src={`${process.env.PUBLIC_URL}/img/gallery_img_4.png`} alt="Todays specials menu" />
      </Gallery>
    </>
  );
}

export default App;
