import React, {Component} from 'react';
import './Contact.css'


class Contact extends Component {
    render() {
        return (
            <div id="contact" className="container-fluent backgroundContact">
                <div className="row">
                    <div className="col text-center">
                        <h4 className="contactMe">Kontakt</h4>
                        <h3 className="myEmail">wegrzyn.adr@gmail.com</h3>
                    </div>
                    <div className="col text-center">
                        <div className="githubIcon">
                            <a className="btn btn-outline btn-xl emailButton"
                               href="mailto:wegrzyn.adr@gmail.com" target="_top">Napisz wiadomość</a>
                            <a href="https://github.com/adrianwegrzyn">
                                <i className="fab fa-github"/></a>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Contact;
