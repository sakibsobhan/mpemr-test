
import './App.css';
import About from './components/About/About';
import Biography from './components/Biography/Biography';
import Footer from './components/Footer/Footer';
import Gallery from './components/Gallery/Gallery';
import InnerBanner from './components/InnerBanner/InnerBanner';
import NewsDetails from './components/NewsDetails/NewsDetails';
import NewsSection from './components/NewsSection/NewsSection';
import Officers from './components/Officers/Officers';
import OfficersDetails from './components/OfficersDetails/OfficersDetails';
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
        <Biography></Biography>
        <Officers></Officers>
        <OfficersDetails></OfficersDetails>
    </div>
  );
}

export default App;
