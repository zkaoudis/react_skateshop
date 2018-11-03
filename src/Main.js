import React, { Component } from "react";
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
import Home from "./Home";
import New from "./New";
import Skate from "./Skate";
import Snow from "./Snow";
import Shoes from "./Shoes";
import Clothing from "./Clothing";
import Womens from "./Womens";
import Accessories from "./Accessories";
import Brands from "./Brands";
import Sale from "./Sale";

class Main extends Component {
  render() {
    return (
        <HashRouter>
        <div>
          <h1>Custom Complete Skateboards</h1>
          <ul className="header">
            <li><NavLink exact to="/">HOME</NavLink></li>
            <li><NavLink to="/new">NEW ARRIVALS</NavLink></li>
            <li><NavLink to="/skate">SKATE</NavLink></li>
            <li><NavLink to="/snow">SNOW</NavLink></li>
            <li><NavLink to="/shoes">SHOES</NavLink></li>
            <li><NavLink to="/clothing">CLOTHING</NavLink></li>
            <li><NavLink to="/womens">WOMENS</NavLink></li>
            <li><NavLink to="/accessories">ACCESSORIES</NavLink></li>
            <li><NavLink to="/brands">BRANDS</NavLink></li>
            <li><NavLink to="/sale">SALE</NavLink></li>
          </ul>
          <div className="content">
            <Route exact path="/" component={Home}/>
            <Route path="/new" component={New}/>
            <Route path="/skate" component={Skate}/>
            <Route path="/snow" component={Snow}/>
            <Route path="/shoes" component={Shoes}/>
            <Route path="/clothing" component={Clothing}/>
            <Route path="/womens" component={Womens}/>
            <Route path="/accessories" component={Accessories}/>
            <Route path="/brands" component={Brands}/>
            <Route path="/sale" component={Sale}/>
          </div>
          <footer className="footer">
            <img src="bogopants.jpg" alt="BOGO Pants!"/>
          </footer>
        </div>
        </HashRouter>
    );
  }
}
 
export default Main;