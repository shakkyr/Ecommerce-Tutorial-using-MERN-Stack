import './App.css';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Header from './Header'

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <main>
        <Switch>
          
        </Switch>
      </main>
    </BrowserRouter>
  );
}

export default App;
