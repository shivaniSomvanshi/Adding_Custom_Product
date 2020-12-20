import React, { setState } from "react";
import { Link } from "react-router-dom";
import "../Navbar.css";

class Logout extends React.Component {
  state = {
    modalShow: false,
  };
  render() {
    
    return (
      <div className='conditional_render'>
        <Link to="/userLogin">
          <button onClick={() => this.setState({ modalShow: true })}type="button">
            Log In
          </button>
        </Link>

        {/* <LoginModal
              show={this.state.modalShow}
              onHide={modalClose}
              pushProduct={this.pushProduct}
            /> */}
      </div>
    );
  }
}

export default Logout;
