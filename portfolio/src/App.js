import './App.css';
import Hero from './components/heroSecion/hero';
import Aboutme from './components/aboutMeSection/aboutme';
import Skills from './components/skillsSection/skills'
import Portfolio from './components/portfolioSection/portfolio'
function App() {
  return (
    <div className="App">
     <Hero/>
     <Aboutme/>
     <Skills/>
     <Portfolio/>
    </div>
  );
}

export default App;
