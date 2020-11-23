import './App.css';
import Navbar from './components/layouts/Navbar';
import Header from './components/components/Header';
import DonarForm from './components/components/DonarForm';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header/>
      <DonarForm />
    </div>
  );
}

export default App;
