
import './App.css';
import About from './components/About/About';
import Footer from './components/Footer/Footer';
import Gallery from './components/Gallery/Gallery';
import InnerBanner from './components/InnerBanner/InnerBanner';
import NewsDetails from './components/NewsDetails/NewsDetails';
import NewsSection from './components/NewsSection/NewsSection';
import Partner from './components/Partner/Partner';
import ProjectFeed from './components/ProjectFeed/ProjectFeed';

function App() {
  return (
    <div className="App">
        <Partner></Partner>
        <NewsSection></NewsSection>
        <NewsSection></NewsSection>
        <ProjectFeed></ProjectFeed>
        <Footer></Footer>

        <InnerBanner></InnerBanner>
        <Gallery></Gallery>
        <NewsDetails></NewsDetails>
        <About></About>
    </div>
  );
}

export default App;
