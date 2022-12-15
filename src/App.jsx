/* eslint-disable react/no-unescaped-entities */
import Navbar from './components/organisms/Navbar';
import Carousel from './components/organisms/Carousel';
import About from './components/organisms/About';
import Gallery from './components/organisms/Gallery';
import data from './pageData.json';

function App() {
  return (
    <>
      <Navbar title="Renome" />
      <Carousel />
      <About
        title={data.about.title}
        subtitle={data.about.subtitle}
        text={data.about.text}
      />
      <Gallery
        title={data.gallery.title}
        subtitle={data.gallery.subtitle}
        images={data.gallery.images}
      />
    </>
  );
}

export default App;
