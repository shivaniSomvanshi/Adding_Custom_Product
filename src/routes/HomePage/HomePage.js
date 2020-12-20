import React, { Component } from "react";
import Navbar from "../../components/Navbar/Navbar";
import Carousel from "../../components/Carousel/Carousel";
import DisplaySection from './DisplaySection';
import './HomePage.css';

class HomePage extends Component {
  render() {
    return (
      <>
        <Navbar shadow={true}/>
        <div className="home">
          <Carousel />
          {/* <div className="productts"> */}
            <DisplaySection/>
          {/* </div> */}
        </div>
      </>
    );
  }
}

export default HomePage;
