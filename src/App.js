import './App.css';
import Hero from './components/Hero';
import Disclaimer from './components/Disclaimer';
import YoutubeDisclaimer from './components/YoutubeDisclaimer';
import PercentegeDisclaimer from './components/PercentegeDisclaimer';
import Features from './components/Features';
import Alerts from './components/Alerts';
import ContactForm from './components/ContactForm';
import Partners from './components/Partners';
import Footer from './components/Footer';

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
      <Footer />
    </div>
  );
}

export default App;
