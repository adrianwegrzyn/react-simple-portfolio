import React, {Component} from 'react';
import "./Navbar.css"
import logo from '../../logo.png'

class Navbar extends Component {

    openSlideMenu = () => {
        document.getElementById('side-menu').style.width = '250px';
    };

    closeSlideMenu = () => {
        document.getElementById('side-menu').style.width = '0';
    };

    render() {
        const sections = ['home', 'about', 'projects', 'contact'];
        const navLinks = sections.map(sections => {
            return (
                <li><a href={'#' + sections} className="nav-link">{sections}</a></li>
            )
        });
        return (
            <div>
                <nav className="navbar">
                    <span className="open-slide">
                        <button onClick={this.openSlideMenu}>
                          <svg width="30" height="30">
                              <path d="M0,5 30,5" stroke="#FFF" strokeWidth="5"/>
                              <path d="M0,14 30,14" stroke="#FFF" strokeWidth="5"/>
                              <path d="M0,23 30,23" stroke="#FFF" strokeWidth="5"/>
                          </svg>
                        </button>
                    </span>
                    <ul className="nav-links">
                        {navLinks}
                    </ul>
                </nav>

                <div id="side-menu" className="side-nav" onClick={this.closeSlideMenu}>
                    <a href="#" className="btn-close">&times;</a>
                    {navLinks}
                </div>
            </div>
        );
    }
}

export default Navbar;
