// import logo from './logo.svg';
import './App.css';
import Nav from './components/Nav';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import HomeContainer from './containers/HomeContainer';
import AboutContainer from './containers/AboutContainer';
import ProjectsContainer from './containers/ProjectsContainer';
import ContactContainer from './containers/ContactContainer';



function App() {
  return (
    <div className="App">
      <Router>
        <Nav />
        <Switch>
          <Route exact path="/">
            <HomeContainer/>
          </Route>
          <Route exact path="/about">
            <AboutContainer/>
          </Route>
          <Route exact path="/projects">
            <ProjectsContainer/>
          </Route>
          <Route exact path="/contact">
            <ContactContainer/>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
