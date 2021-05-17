import React, { Component } from 'react'
import axios from 'axios'

export class Participate extends Component {
    
    constructor(props) {
        super(props)

        this.state = {
            Profession: '',
            Sexe: '',
            Age: '',
            Zone : '',
            Filiere : '',
            Departement : '',
            Impact:'',
            Appareils : '',
            Satisfaction_Cours: '',
            Satisfaction_TD: '',
            Outils : '',
            outils_viso : '',
            Problems: '',
            Solutions: '',
            Comments: ''
        }
      }
    
      changeHandler = (e) => {
        this.setState({[e.target.name] : e.target.value})
      }
    
      submitHandler = e => {
        alert ('Vos données ont été enregistrées avec succès')
        e.preventDefault();
        console.log(this.state);

        axios.post('https://sheet.best/api/sheets/f0718b93-ba4e-486c-b49d-4aef6cf17ecf', this.state)
        .then(response => {
          console.log(response);
        })
      }
      
      
    render(){
        const { Profession,Sexe,Age,Zone,Filiere,Departement,Impact,Appareils,Satisfaction_Cours,Satisfaction_TD,Outils,outils_viso,Problems,Solutions,Comments } = this.state;
        
        return (
            <form onSubmit={this.submitHandler} className="uk-width-1-2@s uk-width-3-4">
                <div id="valdation"></div>
                <select onChange={this.changeHandler} name="Profession" value={Profession} className="uk-margin uk-select">
                    <option>Profession</option>
                    <option selected value="professeur">Professeur</option>
                    <option value="etudiant">Étudiant</option>
                </select>
                <select onChange={this.changeHandler} name="Sexe" value={Sexe} className="uk-margin uk-select">
                    <option>Sexe</option>
                    <option selected value="homme">Homme</option>
                    <option value="femme">Femme</option>
                </select>
                <select onChange={this.changeHandler} name="Zone" value={Zone} className="uk-margin uk-select">
                    <option>Zone Habitation</option>
                    <option value="rurale">Zone Rurale</option>
                    <option value="urbaine">Zone Urbaine</option>
                </select>
                <div className="uk-margin">
                    <input className="uk-input" onChange={this.changeHandler} value={Age} name="Age" type="number" placeholder="Age"/>
                </div>
                <select onChange={this.changeHandler} name="Filiere" value={Filiere} className="uk-margin uk-select">
                    <option>Filière</option>
                    <option value="Cycle d'Ingénieur d'état">Cycle d'Ingénieur d'état</option>
                    <option value="Licence professionnelle">Licence Professionnelle</option>
                    <option value="Diplôme Universitaire de Technologie (DUT)">Diplôme Universitaire de Technologie (DUT)</option>
                </select>
                <select onChange={this.changeHandler} value={Departement} name="Departement" className="uk-margin uk-select">
                    <option>Département</option>
                    <option value="Mathématiques et Informatique">Mathématiques et Informatique</option>
                    <option value="Génie Economie et Gestion">Génie Economie et Gestion</option>
                    <option value="Sciences et Techniques Administratives et Ingénierie des Compétences">Sciences et Techniques Administratives et Ingénierie des Compétences</option>
                    <option value="Génie Electrique">Génie Electrique</option>
                    <option value="Génie Mécanique">Génie Mécanique</option>
                </select>
                <hr/>
                <label>Comment était l'impact des études à distance? <strong style={{color:'#59E146'}}>{Impact}</strong></label><br/>
                <div align="center" style={{color:'white'}} data-uk-grid className="uk-margin uk-child-width-1-3 ">
                    <label><input className="uk-radio" type="radio" value="Impact positif" onChange={this.changeHandler} name="Impact"/> Impact positif</label>
                    <label><input className="uk-radio" type="radio" value="Aucun impact" onChange={this.changeHandler} name="Impact"/> Aucun</label>
                    <label><input className="uk-radio" type="radio" value="Impact negatif" onChange={this.changeHandler} name="Impact"/> Impact négatif</label>
                </div><hr/>
                <label>Êtes-vous Satisfait du suivit des cours à distance? <strong style={{color:'#59E146'}}>{Satisfaction_Cours}</strong></label><br/>
                <div align="center" style={{color:'white'}} data-uk-grid className="uk-margin uk-child-width-1-4 ">
                    <label><input className="uk-radio" type="radio" value="10" onChange={this.changeHandler} name="Satisfaction_Cours"/> Pleinement Satisfait</label>
                    <label><input className="uk-radio" type="radio" value="8" onChange={this.changeHandler} name="Satisfaction_Cours"/> Satisfait</label>
                    <label><input className="uk-radio" type="radio" value="5" onChange={this.changeHandler} name="Satisfaction_Cours"/> Neutre</label>
                    <label><input className="uk-radio" type="radio" value="1" onChange={this.changeHandler} name="Satisfaction_Cours"/> Pas du tout Satisfait</label>
                </div>
                <hr/>
                <label>Êtes-vous Satisfait des TD / TP à distance? <strong style={{color:'#59E146'}}>{Satisfaction_TD}</strong></label><br/>
                <div align="center" style={{color:'white'}} data-uk-grid className="uk-margin uk-child-width-1-4 ">
                    <label><input className="uk-radio" type="radio" value="10" onChange={this.changeHandler} name="Satisfaction_TD"/> Pleinement Satisfait</label>
                    <label><input className="uk-radio" type="radio" value="8" onChange={this.changeHandler} name="Satisfaction_TD"/> Satisfait</label>
                    <label><input className="uk-radio" type="radio" value="5" onChange={this.changeHandler} name="Satisfaction_TD" /> Neutre</label>
                    <label><input className="uk-radio" type="radio" value="1" onChange={this.changeHandler} name="Satisfaction_TD"/> Pas du tout Satisfait</label>
                </div>
                <hr/>
                <select onChange={this.changeHandler} value={Appareils} name="Appareils" className="uk-margin uk-select">
                    <option>Appareils</option>
                    <option value="Ordinateur personnel">Ordinateur personnel</option>
                    <option value="Smartphone">Smartphone</option>
                    <option value="Ordinateur partagé par les membres de la famille">Ordinateur partagé par les membres de la famille</option>
                </select>
                <select onChange={this.changeHandler} value={Outils} name="Outils" className="uk-margin uk-select">
                    <option>Outils</option>
                    <option value="classroom">Classroom</option>
                    <option value="ent">ENT</option>
                    <option value="drive">Drive</option>
                </select>
                <select onChange={this.changeHandler} name="outils_viso" value={outils_viso} className="uk-margin uk-select">
                    <option>Outils Visio-conférence</option>
                    <option value="Meet">Meet</option>
                    <option value="Zoom">Zoom</option>
                    <option value="Black Board Collaborate / Big Blue Button">Big BlackBoard</option>
                </select>
                <textarea name="Problems" onChange={this.changeHandler} value={Problems} placeholder="Vos problèmes..." className="uk-margin uk-textarea"></textarea>
                <textarea name="Solutions" onChange={this.changeHandler} value={Solutions} placeholder="Quelle sera la Solution que vous proposez..." className="uk-margin uk-textarea"></textarea>
                <textarea name="Comments" onChange={this.changeHandler} value={Comments} placeholder="Votre commentaire..." className="uk-margin uk-textarea"></textarea>
                <input type="submit" className="uk-button uk-button-primary uk-light"/>
            </form>
        )

}
}
export default Participate
