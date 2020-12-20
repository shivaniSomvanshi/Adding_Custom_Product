import React from "react";
import "./App.css";
import { BrowserRouter, Route } from "react-router-dom";
import HomePage from "./routes/HomePage/HomePage";
import Login from "./routes/LoginPage/Login";
import PostedProducts from './routes/PostedProducts/PostedProducts';
import SearchProduct from './routes/SearchProduct/SearchProduct';

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/userLogin" component={Login} />
        <Route exact path="/postedProducts" component={PostedProducts} />
        <Route path='/search/:searchTerm' exact
          render={props => <SearchProduct key={props.location.pathname} {...props}/>}
        />
      </BrowserRouter>
    </div>
  );
};

export default App;

