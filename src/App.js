import './index.css'
import Home from './components/Home'
import Docs from './components/Docs'
import { Switch,Route } from 'react-router';

function App() {  

  return (
   <div className="parents">
      <div className="App">
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/docs" component={Docs} />
        </Switch>
      </div>
    </div>
  );
}

export default App;
