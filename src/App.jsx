import './App.css';
import { HomeContainer } from './containers/HomeContainer';
import { NavBar } from './components/NavBar/';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { ItemDetailContainer } from './containers/ItemDetailContainer/';
import { ItemListContainer } from './containers/ItemListContainer/';
import { CustomProvider } from './context/CartContext/';
import { Cart } from './components/Cart/';

function App() {
  return (
    <CustomProvider>
      <BrowserRouter>
        <header>
          <NavBar />
        </header>
        <Switch>
          <Route exact path="/" component={HomeContainer} />
          <Route exact path="/categories/:cat" component={ItemListContainer} />
          <Route exact path="/product/:id" component={ItemDetailContainer} />
          <Route exact path="/cart" component={Cart} />
          <Route exact path="*" component={() => <h1 className="text-center">404 page not found</h1>} />
        </Switch>
      </BrowserRouter>
    </CustomProvider>
  );
}

export default App;
