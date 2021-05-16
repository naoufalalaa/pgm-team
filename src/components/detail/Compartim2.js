import React, { Component } from 'react'
import goal1 from '../goal1.png'
import goal2 from '../goal2.png'
import goal3 from '../goal3.png'
export class Comp2 extends Component {
    render(){
    return (
        <div align="center">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#1e1e4f" fillOpacity="1" d="M0,224L180,160L360,128L540,224L720,224L900,96L1080,128L1260,0L1440,32L1440,320L1260,320L1080,320L900,320L720,320L540,320L360,320L180,320L0,320Z"></path></svg>
            <div style={{backgroundColor: '#191a44',padding:'10px'}}>
                <h1 data-uk-scrollspy="cls:uk-animation-slide-top;overflow:false; delay:500; repeat: true">Pourquoi ce projet?</h1>
                <div data-uk-scrollspy="cls: uk-animation-fade; target: .service; delay: 700; repeat: true" class="uk-child-width-expand@m uk-grid-match uk-width-2-3 uk-text-center"  data-uk-grid="parallax:20">
                    <div>
                        <div class="uk-padding service">
                            <img className="goal" src={goal1} width="50px" alt="Goal1"/>
                            <p>Connaitre les avis des étudiants et professeurs</p>
                        </div>
                    </div>
                    <div>
                        <div class="uk-padding service">
                            <img className="goal" src={goal2} width="50px" alt="Goal2"/>
                            <p>Solution et astuces qui peuvent améliorer cet enseignement à distance.</p>
                        </div>
                    </div>
                    <div>
                        <div class="uk-padding service">
                            <img className="goal" src={goal3} width="50px" alt="Goal3"/>
                            <p>Savoir si un jour on arrivera à voir des université complètement digitalisée.</p>
                        </div>
                    </div>
                </div>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#1e1e4f" fill-opacity="1" d="M0,224L180,160L360,128L540,224L720,224L900,96L1080,128L1260,0L1440,32L1440,0L1260,0L1080,0L900,0L720,0L540,0L360,0L180,0L0,0Z"></path></svg>
        </div>
    )
    }
}

export default Comp2
