import {BrowserRouter as Router , Route , Switch} from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/footer'
import Home from './components/Home'
import About from './components/About'
import Event from './components/Evenement'
import Form from './components/form'
import Analyse from './components/analyse'


function App() {
  return (
    <Router>
      <Navbar/>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/About">
          <About />
        </Route>
        <Route exact path="/Event">
          <Event />
        </Route>
        <Route exact path="/source/form">
          <Form />
        </Route>
        <Route exact path="/source/data">
          <Analyse />
        </Route>
      </Switch>
      <Footer/>
    </Router>
  );
}

export default App;
