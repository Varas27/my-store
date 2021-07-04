import './App.css';
import { HomeContainer } from './containers/HomeContainer';
import { NavBar } from './components/NavBar/';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { ItemDetailContainer } from './containers/ItemDetailContainer/';
import { ItemListContainer } from './containers/ItemListContainer/';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <NavBar />
        <Switch>
          <Route exact path="/" component={HomeContainer} />
          <Route exact path="/categories/:cat" component={ItemListContainer} />
          <Route exact path="/product/:id" component={ItemDetailContainer} />
          <Route exact path="*" component={() => <h1>404 page not found</h1>} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
