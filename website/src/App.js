import React from 'react';
import {BrowserRouter,Switch,Route} from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Home from './pages/Home';
import About from './pages/About'

function App() {
  return (
  	<BrowserRouter>
	    <div className="App">
	      <Navbar />
	      <Switch>
	      	<Route exact path='/' component={Home} />
	      	<Route exact path="/About" component={About} />
	      </Switch>
	      <Footer />
	    </div>
    </BrowserRouter>
  );
}

export default App;
