import './App.css';
import { HomeContainer } from './containers/HomeContainer';
import { NavBar } from './components/NavBar/';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { ItemDetailContainer } from './containers/ItemDetailContainer/';
import { ItemListContainer } from './containers/ItemListContainer/';
import { CartContext } from './context/CartContext/';
import { useContext } from 'react';

function App() {
  const asd = useContext(CartContext);
  console.log(asd);
  return (
    <BrowserRouter>
      <NavBar />
      <Switch>
        <Route exact path="/" component={HomeContainer} />
        <Route exact path="/categories/:cat" component={ItemListContainer} />
        <Route exact path="/product/:id" component={ItemDetailContainer} />
        <Route exact path="*" component={() => <h1 className="text-center">404 page not found</h1>} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
