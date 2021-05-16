import React,{useEffect} from 'react'
import Participate from './Participate'
const Form = () => {
        
    useEffect( () => document.title='PGM-team — Participate')
    return (
            <div align="center" style={{marginTop:'10%',color:'white'}}>
                <div className="uk-width-2-3 uk-width-1-2@s">
                    <h1>Bienvenue à vous!</h1>
                    <p>Ce questionnaire vise à analyser l'effet de la pandémie de COVID-19 sur la performance académique des étudiants et professeurs de l'ENSET pendant le confinement.
                        Votre identité est anonyme et votre participation à cette étude est totalement volontaire.
                        Merci de remplir ce formulaire uniquement si vous faites partie de l'ENSET.</p>
                </div>
                <Participate/>
            </div>
        )
}

export default Form
