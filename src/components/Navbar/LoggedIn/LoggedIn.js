import React from "react";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import ModalPop from "./Modal.js";
import "../Navbar.css";
  
class Login extends React.Component {
  state = {
    modalShow: false,
    redirect : null,
  };

  logout = () => {
    localStorage.clear();
    this.setState({redirect : '1'});
    this.props.logoutClear();
  }

  pushProduct = (details) => {
    console.log(details);

    const newProduct = {
      id: "878",
      productImage: details.selectedFile,
      productName: details.title,
      productPrice: Number(details.price),
      productDescription: details.description,
      productStock: details.stock,
    };
    this.props.addProduct(newProduct);
    this.setState({ modalShow: false });
  };

  render() {

    if(this.state.redirect){
      return <Redirect to='/userLogin'/>
    }

    let modalClose = () => {
      this.setState({ modalShow: false });
    };
    return (
      <div className="conditional_render logged_in">
        <div className="avatar">
          <a
            class="nav-link dropdown-toggle"
            href="#"
            id="navbarDropdown"
            role="button"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            <div className='avatarIcon'>
            <i class="user circle icon big blue"></i>
            {/* <p>Username</p> */}
            <p>{this.props.userDetails}</p>
            </div>
          </a>
          <div class="dropdown-menu" aria-labelledby="navbarDropdown">
            {/* <a class="dropdown-item" href="#">
                  Action
                </a> */}
            <a onClick={this.logout} class="dropdown-item" href="#">
              SIGN-OUT
            </a>
          </div>
        </div>
        <button
          onClick={() => this.setState({ modalShow: true })}
          className="button buttonOne"
          type="button"
        >
          ADD PRODUCT
        </button>
        <Link to="/postedProducts">
          <button className="button buttonOne" type="button">
            MY PRODUCTS
          </button>
        </Link>
        {/* MODAL START--------------------------------------- */}
        <ModalPop
          show={this.state.modalShow}
          onHide={modalClose}
          submitHandler={this.pushProduct}
        />
        {/* MODAL END----------------------------------------- */}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    // prodList: state.prod.postedData,
    userDetails: state.user.userName
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addProduct: (productDetails) =>
      dispatch({ type: "ADD_PRODUCT", productData: productDetails }),
    logoutClear: () => 
      dispatch({ type: "CLEAR_STORE"}),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
