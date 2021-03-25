import { Switch, Route, Link } from 'react-router-dom';
import { Componente1 } from './Componente1';
import { Componente2 } from './Componente2';
import './App.css';

function App() {
  return (
    <div>
      <nav>
        <Link to="/componente1">Componente 1</Link>
        <Link to="/componente2">Componente 2</Link>
      </nav>
      <Switch>
        <Route path="/componente1" component={Componente1} />
        <Route path="/componente2" component={Componente2} />
      </Switch>
    </div>
  );
}

export default App;
