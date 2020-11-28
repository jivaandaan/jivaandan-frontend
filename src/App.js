import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Home from './components/pages/Home';
import DonarForm from './components/pages/DonarForm';
import 'aos/dist/aos.css';
import Navbar from './components/layouts/Navbar';
import RecipientForm from './components/pages/RecipientForm';

function App() {
  
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/donor-form" component={DonarForm} />
        <Route path="/recipient-form" component={RecipientForm} />
      </Switch>
    </Router>
  );
}

export default App;
