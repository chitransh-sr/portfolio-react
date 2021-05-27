import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Interest from './components/Interest';
import Skills from './components/Skills';
import Projects from './components/Project';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <>
    <Navbar/>
    <Home/>
    <About/>
    <Interest/>
    <Skills/>
    <Projects/>
    <Contact/>
    <Footer/>
    </>
  );
}

export default App;