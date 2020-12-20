import React, { Component } from "react";
import Navbar from "../../components/Navbar/Navbar";
import "./PostedProduct.css";
import ProductBlock from "../../components/ProductBlock/ProductBlock";
// import dummmyData from "../HomePage/FeaturedProductList";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

class PostedProduct extends Component {
  state = {
    // products: dummmyData,
    price: "0",
    stock: "0",
  };

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
    this.setState({
      [name]: value,
    });
    console.log(this.state);
    setTimeout(() => {
      console.log(this.state);
    }, 2000);
  };

  render() {

    let logStatus = localStorage.getItem('logStatus');
    if(logStatus === null){
      return <Redirect to='/userLogin'/>
    }

    let data = null;
    if (
      this.props.prodList &&
      this.state.price === "0" &&
      this.state.stock === "0"
    ) 
    {
      data = this.props.prodList.map((item) => {
        return <ProductBlock data={item} />;
      });
    } 

    else if(this.props.prodList && this.state.price !== "0" && this.state.stock !== "0"){
      if(this.state.price === "1" && this.state.stock == "1"){
        data = this.props.prodList.map((item) => {
          console.log(item);
          if (item.productPrice >= 399 && item.productPrice <= 599 && item.productStock >=1 && item.productStock <=5) {
            return <ProductBlock data={item} />;
          }
          return null;
        });
      }
      else if(this.state.price === "1" && this.state.stock == "2"){
        data = this.props.prodList.map((item) => {
          if (item.productPrice >= 399 && item.productPrice <= 599 && item.productStock >=5 && item.productStock <=10) {
            return <ProductBlock data={item} />;
          }
          return null;
        });
      }
      else if(this.state.price === "2" && this.state.stock == "1"){
        data = this.props.prodList.map((item) => {
          if (item.productPrice >= 599 && item.productPrice <= 999 && item.productStock >=1 && item.productStock <=5) {
            return <ProductBlock data={item} />;
          }
          return null;
        });
      }
      else if(this.state.price === "2" && this.state.stock == "2"){
        data = this.props.prodList.map((item) => {
          if (item.productPrice >= 599 && item.productPrice <= 999 && item.productStock >=5 && item.productStock <=10) {
            return <ProductBlock data={item} />;
          }
          return null;
        });
      }
      else if(this.state.price === "3" && this.state.stock == "1"){
        data = this.props.prodList.map((item) => {
          if (item.productPrice >= 999 && item.productPrice <= 1499 && item.productStock >=1 && item.productStock <=5) {
            return <ProductBlock data={item} />;
          }
          return null;
        });
      }
      else if(this.state.price === "3" && this.state.stock == "2"){
        data = this.props.prodList.map((item) => {
          if (item.productPrice >= 999 && item.productPrice <= 1499 && item.productStock >=5 && item.productStock <=10) {
            return <ProductBlock data={item} />;
          }
          return null;
        });
      }
    }
    
    else if (this.props.prodList && this.state.price !== "0") {
      console.log(this.state.price);
      if (this.state.price === "1") {
        data = this.props.prodList.map((item) => {
          if (item.productPrice >= 399 && item.productPrice <= 599) {
            return <ProductBlock data={item} />;
          }
          return null;
        });
      }
      if (this.state.price === "2") {
        data = this.props.prodList.map((item) => {
          if (item.productPrice >= 599 && item.productPrice <= 999) {
            return <ProductBlock data={item} />;
          }
          return null;
        });
      }
      if (this.state.price === "3") {
        data = this.props.prodList.map((item) => {
          if (item.productPrice >= 999 && item.productPrice <= 1499) {
            return <ProductBlock data={item} />;
          }
          return null;
        });
      }
    }

    //Checking for stocks
    else if (this.props.prodList && this.state.stock !== "0") {
      if (this.state.stock === "1") {
        data = this.props.prodList.map((item) => {
          if (item.productStock >= 1 && item.productStock <= 5) {
            return <ProductBlock data={item} />;
          }
          return null;
        });
      }
      if (this.state.stock === "2") {
        data = this.props.prodList.map((item) => {
          if (item.productStock >= 5 && item.productStock <= 10) {
            return <ProductBlock data={item} />;
          }
          return null;
        });
      }
    }

    return (
      <div>
        <Navbar shadow={true} />
        <div className="selected_page">
          <div className="display_category">
            <div className="sidebar">
              <div>
                <label>Price range:</label>
                <select name="price" onChange={this.handleChange}>
                  <option value="0">All Products</option>
                  <option value="1">399-599</option>
                  <option value="2">599-999</option>
                  <option value="3">999-1499</option>
                </select>
              </div>
              <br />
              <br />
              <div>
                <label>Quantity available:</label>
                <select name="stock" onChange={this.handleChange}>
                  <option value="0">1+</option>
                  <option value="1">1-5</option>
                  <option value="2">5-10</option>
                </select>
              </div>
            </div>
            <div className="products_display">
              <div className="displayContainer">{data}</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    prodList: state.prod.postedData,
  };
};

// const mapDispatchToProps = (dispatch) => {
//   return {

//     addProduct: (productDetails) =>
//       dispatch({ type: 'ADD_PRODUCT', productData: productDetails }),

//   };
// };

export default connect(mapStateToProps)(PostedProduct);
