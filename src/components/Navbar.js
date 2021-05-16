import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import logo from './logo256.png'
import FB from './facebook.png'

export class Navbar extends Component {
    render() {
        return (
          <div>
            <svg className="head" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#1e1e4f" fillOpacity="1" d="M0,288L288,96L576,96L864,224L1152,160L1440,128L1440,0L1152,0L864,0L576,0L288,0L0,0Z"></path></svg>
            <nav className="uk-navbar-container uk-navbar uk-navbar-transparent uk-visible@m uk-margin-large-bottom" data-uk-navbar="mode: click">
                <div className="uk-navbar-left uk-margin-left">
                  <Link to="/"><img alt="PGM-team" src={logo} width="150px"/></Link>
                </div>
                <div className="uk-navbar-right uk-margin-right">
                    <ul className="uk-navbar-nav">
                      
                      <li><Link to="/"> <span className="link">Acceuil</span></Link></li>
                        <li>
                            <Link to="#"><span className="link">Sources</span></Link>
                            <div className="uk-navbar-dropdown">
                                <ul className="uk-nav uk-navbar-dropdown-nav">
                                    <li><Link to="/source/form">Participer</Link></li>
                                    <li><Link to="/source/data">Analyse & Diagramme</Link></li>
                                </ul>
                            </div>
                        </li>
                        <li><Link to="/Event"><span className="link">Évènements</span></Link></li>
                        <li><Link to="/About"><span className="link">À propos</span></Link></li>
                        <li><a href="https://www.facebook.com/EAEFACS"><img alt="facebook" className="link" src={FB} width="25px"/></a></li>
                    </ul>
            
                </div>
            </nav>
            <nav className="uk-navbar-transparent uk-navbar-container uk-hidden@m uk-margin-large-bottom" data-uk-navbar>
                <div className="uk-navbar-left">
                    <button style={{color : '#59E146'}} className="uk-navbar-toggle uk-margin-medium-left" data-uk-navbar-toggle-icon data-uk-toggle="target: #offcanvas-nav-primary"></button>
                </div>
                <div className="uk-navbar-right">
                  <img className="uk-margin-medium-right" src={logo} width="100px" alt="PGM-team"/>
                </div>
                <div id="offcanvas-nav-primary" data-uk-offcanvas="overlay: true">
                      <div style={{backgroundColor:'#1e1e4f'}} className="uk-offcanvas-bar uk-flex uk-flex-column">

                          <ul className="uk-nav uk-nav-primary uk-nav-center uk-margin-auto-vertical">
                              <li className="uk-parent"><Link to="/"> <span>Acceuil</span></Link></li>
                              <li className="uk-parent">
                                  <Link to="/source/form"><span>Sources</span></Link>
                                    <ul className="uk-nav-sub">
                                          <li><Link to="/source/form">Participer</Link></li>
                                          <li><Link to="/source/data">Analyse & Diagramme</Link></li>
                                      </ul>
                              </li>
                              <li><Link to="/Event"><span>Évènements</span></Link></li>
                              <li><Link to="/About"><span>À propos</span></Link></li>
                              <li className="uk-nav-divider"></li>
                              <li><a href="https://www.facebook.com/EAEFACS"><img alt="facebook" src={FB} width="25px"/></a></li>
                          </ul>

                      </div>
                  </div>

            </nav>
          </div>
        )
    }
}

export default Navbar