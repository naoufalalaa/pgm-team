import React, { useEffect,useState } from 'react'
import Tabletop from 'tabletop'
import ReactSvgPieChart from "react-svg-piechart"
 
const SatisfactionEtudiant = () => {
        const [data, setData] = useState([]);
        const dt =(Impact1,Impact2,Impact3)=>{return(
            [
            {title: "Negative impact", value: Impact1, color: "red"},
            {title: "No impact", value: Impact2, color: "#f1f1f1"},
            {title: "Positive Impact", value: Impact3, color: "#59E146"}
          ])
        }
        useEffect(() => {
          Tabletop.init({
            key: "15TqqnJOUsMDklItAcLd-_lzv0dxNm3_ln3An5y72HxA",
            simpleSheet: true
          })
            .then((data) => setData(data))
            .catch((err) => console.warn(err));
        }, []);
        let neg=67;
        let aucun=67
        let pos=10
        return (
            <div>
                <div class=" uk-child-width-1-3@s uk-text-center" data-uk-grid="parallax: 30">
                        <div>
                            <div class="service1 uk-card-default uk-card-body">
                                <h6>Impact Négatif</h6>
                                {neg=(data.map((item)=>{return (item.ImpactNegatifEtudiant_DepMI)}))*1}
                            </div>
                        </div>
                        <div>
                            <div class="service1 uk-card-default uk-card-body">
                                <h6>Aucun Impact</h6>
                                {aucun=(data.map((item)=>{return (item.AucunImpactEtudiant_DepMI)}))*1}
                            </div>
                        </div>
                        <div>
                            <div class="service1 uk-card-default uk-card-body">
                                <h6>Impact Positif</h6>
                                {pos=(data.map((item)=>{return(item.ImpactPositifEtudiant_DepMI)}))*1}
                            </div>
                        </div>
                </div>
                <div align="center" className="uk-child-width-1-3@s">
                    <ReactSvgPieChart
                        data={dt(neg,aucun,pos)}
                        // If you need expand on hover (or touch) effect
                        expandOnHover transitionDuration="1s" transitionTimingFunction="ease" strokeColor="#121334"
                        // If you need custom behavior when sector is hovered (or touched)
                        onSectorHover={(d, i, e) => {
                        if (d) {
                            console.log("Mouse enter - Index:", i, "Data:", d, "Event:", e)
                            document.getElementById('span6').innerHTML="<strong style='color:"+d.color+"'>"+d.title+"</strong> représente : "+((d.value/data.map((item)=>{return item.Total6*1}))*100).toFixed(2) +"%"
                        } else {
                            console.log("Mouse leave - Index:", i, "Event:", e)
                            document.getElementById('span6').innerHTML=""
                        }
                        }}
                    />
                <br/><span style={{color:'white'}} id="span6"></span>
                 <hr/>
                 </div>
                 
                </div>
        )
}

export default SatisfactionEtudiant
