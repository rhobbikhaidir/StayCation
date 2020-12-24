import './assets/scss/style.scss';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import LandingPage from 'elements/pages/LandingPage';
import Example from 'elements/pages/Examples';

function App() {
  return (
    <div className="App">
      <Router>
        <Route path="/" component={LandingPage}></Route>{' '}
        <Route path="/example" component={Example} />
      </Router>
    </div>
  );
}

export default App;
