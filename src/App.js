import './assets/scss/style.scss';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import LandingPage from 'pages/LandingPage';
import Example from 'pages/Examples';
import DetailPage from 'pages/DetailPages';
import Checkout from 'pages/Checkout';

function App() {
  return (
    <div className="App">
      <Router>
        <Route exact path="/" component={LandingPage}></Route>
        <Route exact path="/properties/:id" component={DetailPage} />
        <Route path="/example" component={Example} />
        <Route path="/checkout" component={Checkout} />
      </Router>
    </div>
  );
}

export default App;
