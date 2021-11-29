import './App.css';
import Banner from "./components/Banner"
import Clients from './components/Clients';
import Footer from './components/Footer';
import Images from './components/Images';
import Section1 from './components/Section1';
import Section2 from './components/Section2';
import Section3 from './components/Section3';

function App() {
  return (
    <div className="App">
    
        <Banner />
        <Section1 />
        <Section2 />
        <Section3 />
        <Clients />
        <Images />
        <Footer />
      
           
    </div>
  );
}

export default App;
