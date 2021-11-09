import './App.css';
import Hero from './components/Hero';
import Disclaimer from './components/Disclaimer';
import YoutubeDisclaimer from './components/YoutubeDisclaimer';
import PercentegeDisclaimer from './components/PercentegeDisclaimer';
import Features from './components/Features';
import Alerts from './components/Alerts';
import ContactForm from './components/ContactForm';
import Partners from './components/Partners';

function App() {
  return (
    <div className="App">
      <Hero />
      <Disclaimer />
      <YoutubeDisclaimer />
      <PercentegeDisclaimer />
      <Features />
      <Alerts />
      <Partners />
      <ContactForm />
    </div>
  );
}

export default App;
