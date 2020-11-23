import './App.css';
import Navbar from './components/layouts/Navbar';
import Header from './components/components/Header';
import DonarForm from './components/components/DonarForm';
import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {
  // animation initialize
  AOS.init();

  return (
    <div className="App">
      <Navbar />
      <Header />
      <DonarForm />
    </div>
  );
}

export default App;
