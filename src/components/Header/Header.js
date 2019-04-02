import React, {Component} from 'react';
import './Header.css'

class Header extends Component {
    render() {
        return (
            <header id="home" className="container-fluent">
                <div className="row">
                    <div className="mainImg">
                        <div className="col-12 mx-auto">
                            <h1 className="text1">Cześć !</h1>
                            <h2 className="text2">Witam na mojej stronie !</h2>
                        </div>
                    </div>
                </div>
                <div className="row justify-content-center">
                    <div className="col-12">
                        <a href="#about" className="downArrow">
                            <i className="fas fa-angle-double-down fa-2x"/>
                        </a>
                    </div>
                </div>
            </header>
        );
    }
}

export default Header;
