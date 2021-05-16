import React, { useEffect,useState } from 'react'
import Tabletop from 'tabletop'
import ImpactEtudiant from '../detail/impactgen'
import SatisfactionEtudiant from '../detail/satisfEtu'
const AnalyseEtudiant = () => {
        const [data, setData] = useState([]);
        
        useEffect(() => {
          Tabletop.init({
            key: "15TqqnJOUsMDklItAcLd-_lzv0dxNm3_ln3An5y72HxA",
            simpleSheet: true
          })
            .then((data) => setData(data))
            .catch((err) => console.warn(err));
        }, []);
        
        return (
            <div style={{margin:'10%'}}>
                <div className="trait_dessus"><hr/></div>
                <h2 className="uk-margin">Analyse Étudiants {data.map((item)=>{return <small className="uk-label">+{(item.Total_Etu)}</small>})}</h2>
                <h4 className="Ana" style={{display:'block',cursor: 'pointer'}} data-uk-toggle="target: .gen">- Vue générale <small>: impact des études à distance sur les étudiants <span className="gen"><i class="fas fa-angle-up"></i></span><span hidden className="gen"><i class="fas fa-angle-down"></i></span></small></h4>
                <div hidden className="gen">
                    <ImpactEtudiant/>
                </div>
                <h4 className="Ana" style={{display:'block',cursor: 'pointer'}} data-uk-toggle="target: .gen2">- Département Mathématique Informatique <small>: impact des études <span className="gen2"><i class="fas fa-angle-up"></i></span><span hidden className="gen2"><i class="fas fa-angle-down"></i></span></small></h4>
                <div hidden className="gen2">
                    <SatisfactionEtudiant/>
                </div>
            </div>
        )
}

export default AnalyseEtudiant
