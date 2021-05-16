import React, { useEffect,useState } from 'react'
import Tabletop from 'tabletop'

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
                
            </div>
        )
}

export default AnalyseProfesseur
