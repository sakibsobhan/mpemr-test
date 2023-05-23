
import './App.css';
import Footer from './components/Footer/Footer';
import InnerBanner from './components/InnerBanner/InnerBanner';
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
    </div>
  );
}

export default App;
