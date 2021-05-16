import React, {useState,useEffect} from 'react'
import Data from '../data.png'
import Tabletop from 'tabletop'

const Comp3 =()=> {
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
            <div align="center">
                <h1><img src={Data} style={{opacity:0.4}} alt="data" width="30px"/>&nbsp;Data en main</h1>
                <div className="uk-child-width-expand@m uk-grid-match uk-width-2-3 uk-text-center" data-uk-grid="parallax:-10">
                    <div className="uk-text-center">
                        <div style={{backgroundColor:'#191a44'}} className="service uk-background-default uk-padding-small">
                            <p style={{fontWeight:500,fontSize:"20px"}}>Données traitées</p>
                            <strong style={{fontSize:'15pt'}}>+ {data.map((item)=>{return <span>{item.Total_stat}</span>})}</strong> 
                        </div>
                    </div>
                    <div className="uk-text-center">
                        <div style={{backgroundColor:'#191a44'}} className="service uk-background-default uk-padding-small">
                            <p style={{fontSize:"20px"}}>Professeurs</p>
                            <strong style={{fontSize:'15pt'}}>+ {data.map((item)=>{return <span>{item.Total_Prof}</span>})}</strong> 
                        </div>
                    </div>
                    <div className="uk-text-center">
                        <div style={{backgroundColor:'#191a44'}} className="service uk-background-default uk-padding-small">
                            <p style={{fontSize:"20px"}}>Étudiants</p>
                            <strong style={{fontSize:'15pt'}}>+ {data.map((item)=>{return <span>{item.Total_Etu}</span>})}</strong> 
                        </div>
                    </div>
                </div>
            </div>
        )

    
}

export default Comp3
