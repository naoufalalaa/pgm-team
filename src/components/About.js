import React, { useEffect } from 'react'
import avatar1 from '../img/avatar1.png'
import avatar2 from '../img/avatar2.png'
import avatar3 from '../img/avatar3.png'
import avatar4 from '../img/avatar4.png'
const About = () => {

        useEffect(() => document.title='About us')
        
        return (
            <div className="About" style={{marginTop:'10%'}}>
                <h1 align="center">About Team</h1>
                <div className="uk-child-width-1-2@s uk-child-width-1-3@m uk-child-width-1-4@l uk-text-center" data-uk-grid="parallax: 150">
                        <div>
                            <div style={{background: 'none',border:'0px',boxShadow:'none'}} className="uk-card uk-card-default">
                            <div className="uk-card-media-top">
                                <img src={avatar1} alt=""/>
                            </div>
                                <div className="uk-card-body uk-light">
                                    <h3 style={{color:'white'}} className="uk-card-title">Naoufal ALAA</h3>
                                    <small><a className="log" href="https://www.linkedin.com/in/naoufal-alaa/"><i class="fab fa-linkedin"></i></a></small>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div style={{background: 'none',border:'0px',boxShadow:'none'}} className="uk-card uk-card-default">
                            <div className="uk-card-media-top">
                                <img src={avatar4} alt=""/>
                            </div>
                                <div className="uk-card-body uk-light">
                                    <h3 style={{color:'white'}} className="uk-card-title">AIT BEN YISSA Hamza</h3>
                                    <small><a className="log" href="https://www.linkedin.com/in/naoufal-alaa/"><i class="fab fa-linkedin"></i></a></small>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div style={{background: 'none',border:'0px',boxShadow:'none'}} className="uk-card uk-card-default">
                            <div className="uk-card-media-top">
                                <img src={avatar3} alt=""/>
                            </div>
                                <div className="uk-card-body uk-light">
                                    <h3 style={{color:'white'}} className="uk-card-title">AIT LAASRI Aymane</h3>
                                    <small><a className="log" href="https://www.linkedin.com/in/naoufal-alaa/"><i class="fab fa-linkedin"></i></a></small>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div style={{background: 'none',border:'0px',boxShadow:'none'}} className="uk-card uk-card-default">
                            <div className="uk-card-media-top">
                                <img src={avatar2} alt=""/>
                            </div>
                                <div className="uk-card-body uk-light">
                                    <h3 style={{color:'white'}} className="uk-card-title">MAJBAR Yassine</h3>
                                    <small><a className="log" href="https://www.linkedin.com/in/naoufal-alaa/"><i class="fab fa-linkedin"></i></a></small>
                                </div>
                            </div>
                        </div>
                </div>
            </div>
        )
}

export default About
