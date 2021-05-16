import React, { Component } from 'react'
import Pic from '../../img/5211713.png'
export class Comp1 extends Component {
    render(){
    return (
        <div align="center">
            <div className="uk-grid-collapse uk-width-2-3@m uk-child-width-1-2@s uk-margin-large-top" data-uk-grid>
                <div>
                    <div align="left" className="uk-background-transparent uk-padding uk-light">
                        <div className="trait_dessus"><hr/></div>
                        <h1 data-uk-scrollspy="cls:uk-animation-slide-top;overflow:false; duration: 1000"><strong>Tous pour un meilleur avenir</strong></h1>
                        <p data-uk-scrollspy="cls:uk-animation-slide-bottom; delay: 1000;duration: 1000">Études et statistiques des avis et retours des étudiants et professeurs de l'ENSET-Media, avec des diagrammes et courbes représentatifs de l'état de satisfaction des étudiants et professeurs vis-à-vis du système proposé par l'établissement pour la rentrée 2020/2021.</p>
                        <a href="https://www.facebook.com/events/1895918600576301/" className="inter" data-uk-scrollspy="cls:uk-animation-slide-bottom; delay: 1000;duration: 1000"><i class="fas fa-play-circle fa-lg"></i> Regarder l'interview</a>
                    </div>
                </div>
                <div>
                    <div className="uk-background-transparent">
                        <img src={Pic} alt="Online courses"/>
                    </div>
                </div>
            </div>
        </div>
    )

}
}
export default Comp1
