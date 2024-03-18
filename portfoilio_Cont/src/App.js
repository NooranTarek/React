import './App.css';
import Hero from './components/heroSecion/hero';
import Aboutme from './components/aboutMeSection/aboutme';
import Skills from './components/skillsSection/skills'
import Portfolio from './components/portfolioSection/portfolio'
import Footer from './components/footerSection/footer'
function App() {
  return (
    <div className="App">
     <Hero/>
     <Aboutme/>
     <Skills/>
     <Portfolio/>
     <Footer/>
    </div>
  );
}

export default App;
