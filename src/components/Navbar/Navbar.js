import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';
import ConditinalRender from './ConditionalRender'; 
import logoSrc from '../../assets/bidonhomesLOGO.png';
import './Navbar.css';
import SearchBar from './SearchBar';

class Navbar extends Component {

  render() {

    let styles = null;
    if(this.props.shadow){
      styles = {
        boxShadow : '0px 5px 15px #c6c6cc'
      }
    }

    return(
      <div className="Navbar navbar navbar-expand-lg navbar-light bg-light" style={styles}>
        <div className="navbar-brand">
          <NavLink to='/'>
            <img src={logoSrc} alt='logo'/>
          </NavLink>
        </div>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
            
          <div className='SearchContainer'>
            <SearchBar/>
          </div>
          <div className='conditional'>
            <ConditinalRender 
            // isLoggedIn={this.state.isLoggedIn}
            />
          </div>

        
        </div>
      </div>
    )
  }
}

export default Navbar;