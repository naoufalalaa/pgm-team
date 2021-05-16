import React, { useEffect,useState } from 'react'
import Tabletop from 'tabletop'
import ImpactProf from './impactgenProf'
import SatisfactionCP from'./satisfactionTDCours'
const AnalyseProfesseur = () => {
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
                <h2 className="uk-margin">Analyse Professeurs {data.map((item)=>{return <small className="uk-label">+ {(item.Total_Prof)*1}</small>})}</h2>
                <h4 className="Ana" style={{display:'block',cursor: 'pointer'}} data-uk-toggle="target: .gen3">- Impact des études distancielles sur les professeurs <small> <span className="gen3"><i class="fas fa-angle-up"></i></span><span hidden className="gen3"><i class="fas fa-angle-down"></i></span></small></h4>
                <div hidden className="gen3">
                  <ImpactProf/>
                </div>
                <h4 className="Ana" style={{display:'block',cursor: 'pointer'}} data-uk-toggle="target: .gen4">- Satisfaction vis-à-vis des cours / TD-TP <small> <span className="gen4"><i class="fas fa-angle-up"></i></span><span hidden className="gen4"><i class="fas fa-angle-down"></i></span></small></h4>
                <div hidden className="gen4">
                <SatisfactionCP/>
                </div>
            </div>
        )
}

export default AnalyseProfesseur
