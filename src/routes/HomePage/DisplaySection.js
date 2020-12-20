import React, { Component } from "react";
import productList from "./FeaturedProductList";
import ProductBlock from "../../components/ProductBlock/ProductBlock";

class DisplaySection extends Component {
  state = {
    products: productList,
  };

  render() {
    let displayData = this.state.products.map((product) => {
      return <ProductBlock data={product} />;
    });

    return (
      <>
        <h2 style={{marginTop:'98px,',fontWeight:'500',margin:'auto', textAlign:'center'}}>Featured Products</h2>
        <br />
        <div className="dummyproducts">{displayData}</div>
      </>
    );
  }
}

export default DisplaySection;
