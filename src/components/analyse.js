import React, { useEffect,useState } from 'react'
import AnalyseEtudiant from './detail/analyseEtu';
import AnalyseProfesseur from './detail/analyseProf';
import Tabletop from 'tabletop'

const Analyse = () => {
    const [data, setData] = useState([]);
      
    useEffect(() => {
      Tabletop.init({
        key: "15TqqnJOUsMDklItAcLd-_lzv0dxNm3_ln3An5y72HxA",
        simpleSheet: true
      })
        .then((data) => setData(data))
        .catch((err) => console.warn(err));
    }, []);
        useEffect(() => document.title='PGM-team — Analyse de données')

        return (
            <div style={{margin:'10%'}}>
                <div className="trait_dessus"><hr/></div>
                <h2 className="uk-margin">Analyse de +{data.map((item)=>{return <span>{item.Total_stat}</span>})}</h2>
                <p>Cette analyse est faite en temps réel, elle sert à représenter les données de manière brut mais principalement elle sert à organiser et à expleciter les chiffres en diagrammes et histogrammes, tout cela pour une meilleure approche du sujet et une transparence au niveau de la data.</p>
                <p>Vous trouverez ci-dessous des données sur les deux principaux protagonistes, <strong>Etudiants</strong> & <strong>Professeurs</strong> mais représentées séparement.</p>
                <p>Bonne Expérience</p>
                <AnalyseEtudiant/>
                <div align="right">
                    <AnalyseProfesseur/>
                </div>
            </div>
        )
}

export default Analyse
