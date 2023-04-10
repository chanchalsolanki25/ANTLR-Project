import './App.css';
import AdvancedCreativity from './components/AdvancedCreativity';
import BusinessNeed from './components/BusinessNeed';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import PremiumProjects from './components/PremiumProjects';
import ProgressPoll from './components/ProgressPoll';
import Services from './components/Services';
import Transformation from './components/Transformation';

function App() {
  return (
   <>
   <Navbar />
    <ProgressPoll/>
    <Services/>
   <PremiumProjects/>
   <AdvancedCreativity/>
   <BusinessNeed/>
   <Transformation/>
   <Contact/>
   <Footer/> 
   </>
  );
}

export default App;
