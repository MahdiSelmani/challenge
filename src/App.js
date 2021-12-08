
import Headfn from './components/Head';
import Navbarfn from './components/NAvbar';
import Aboutfn from './components/About';
import Projectfn from './components/Project';
import Contactfn from './components/Contact';
import Footerfn from './components/footer';
import './App.css';

function App() {
  return (
    <div>
    <Headfn />
    <Navbarfn />
    <Aboutfn />
    <Projectfn />
    <Contactfn />
      <Footerfn />
      </div>
  );
}

export default App;
