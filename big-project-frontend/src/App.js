import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Index } from './pages/index';
import { Shop } from './pages/shop';
import Product  from './pages/product';
import Basket  from './pages/basket';

function App() {
  return (
    <Router>
      <Switch>
        <Route component={Index} path='/' exact />
        <Route component={Product} path='/product' />
        <Route component={Basket} path='/basket' />
        <Route component={Shop} path='/shop' />
      </Switch>
    </Router>
  );
}

export default App;
