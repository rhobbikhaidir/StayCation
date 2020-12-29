import './assets/scss/style.scss';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import LandingPage from 'elements/pages/LandingPage';
import Example from 'elements/pages/Examples';
import DetailPage from 'elements/pages/DetailPages';

function App() {
  return (
    <div className="App">
      <Router>
        <Route exact path="/" component={LandingPage}></Route>
        <Route exact path="/properties/:id" component={DetailPage} />
        <Route path="/example" component={Example} />
      </Router>
    </div>
  );
}

export default App;
