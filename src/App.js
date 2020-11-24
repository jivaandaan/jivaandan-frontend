import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Home from './components/pages/Home';
import DonarForm from './components/pages/DonarForm';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Navbar from './components/layouts/Navbar';

function App() {
  // animation initialize
  AOS.init();

  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/donor-form" component={DonarForm} />
      </Switch>
    </Router>
  );
}

export default App;
