import React, { Component } from "react";
import "./Login.css";
import Navbar from "../../components/Navbar/Navbar";
import LoginForm from "./LoginForm";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

class Login extends Component {
  state = {
    redirect: null,
  };

  login = (details) => {
    this.props.changeUserName(details.name);
    console.log(details);
    localStorage.setItem("logStatus",1);
    this.setState({ redirect: "1" });
  };

  render() {
    if (this.state.redirect) {
      return <Redirect to="/" />;
    }

    let formData = <LoginForm submitHandler={this.login} />;

    return (
      <div>
        <Navbar shadow={false} />
        <div className="loginBody">
          <div className="loginForm">{formData}</div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    // prodList: state.prod.postedData,
    userDetails: state.user.userName,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    changeUserName: (name) =>
      dispatch({ type: "ADD_USER", userFirstName: name }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
