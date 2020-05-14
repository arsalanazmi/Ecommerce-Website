import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import {
  Header,
  Home,
  Body,
  About,
  Contact,
  Footer,
  ProductWomen,
  ProductMen,
  ProductMobile,
  ProductShoes,
  ProductSpectacles,
  ProductLaptop,
  ProductTablet
} from './Component/Route';

const App = () => {
  return (
    <React.Fragment>
      <Router>
        <Header/>
        <Switch>
          <Route exact path="/">
            <Home />
            <Body/>
            <Footer/>
          </Route>
          <Route path="/About">
            <About />
            <Footer/>
          </Route>
          <Route path="/Contact">
            <Contact />
            <Footer/>
          </Route>
          <Route path="/Products/Clothes">
            <ProductWomen/>
            <ProductMen />
            <Footer/>
          </Route>
          <Route path="/Products/Mobile">
            <ProductMobile/>
            <Footer/>
          </Route>
          <Route path="/Products/Spectacles">
            <ProductSpectacles/>
            <Footer/>
          </Route>
          <Route path="/Products/Shoes">
            <ProductShoes/>
            <Footer/>
          </Route>
          <Route path="/Products/Electronics">
            <ProductLaptop/>
            <ProductTablet/>
            <Footer/>
          </Route>
        </Switch>
      </Router>
    </React.Fragment>
  )
}

export default App;