/* eslint-disable react/no-unescaped-entities */
import Navbar from './components/organisms/Navbar';
import Carousel from './components/organisms/Carousel';
import About from './components/organisms/About';
import data from './pageData.json';

function App() {
  return (
    <>
      <Navbar title="Renome" />
      <Carousel />
      <About title={data.about.title} subtitle={data.about.subtitle} text={data.about.text} />
    </>
  );
}

export default App;
