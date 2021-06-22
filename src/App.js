import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar'
import Home from './pages/Home';
import Product from './pages/Product';
import Report from './pages/Report';
import Team from './pages/Team';


function App() {
  return (
    <>
    <Router>
      <Navbar />
        <Switch>
          <Route path='/' exact component = {Home} />
          <Route path='/products' component = {Product} />
          <Route path='/reports' component = {Report} />
          <Route path='/team' component={Team} />
        </ Switch >
    </Router>
    
    </>
  );
}

export default App;
