import React from "react";
import "./ProductBlock.css";
// import defaultProductImage from '../../assets/defaultProductImg.jpg';
function ProductBlock(props) {

  let imgSrc = props.data.productImage;
  if(imgSrc === 'noImg'){
    imgSrc = 'https://www.tibs.org.tw/images/default.jpg';
  }

  let productDesc = props.data.productDescription;
  if(productDesc == 'noDesc'){
    productDesc = null;
  }

  return (
    <div className="product">
      <img alt="productImg" src={imgSrc} />
      {/* <div className='productContent'> */}
      <h4>
        <b>{props.data.productName}</b>
      </h4>
      <h6>Rs.{props.data.productPrice}</h6>
      <h6>{productDesc}</h6>
      {/* </div> */}
    </div>
  );
}

export default ProductBlock;
