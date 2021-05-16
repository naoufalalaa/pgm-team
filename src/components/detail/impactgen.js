import React, { useEffect,useState } from 'react'
import Tabletop from 'tabletop'
import ReactSvgPieChart from "react-svg-piechart"
 
const ImpactEtudiant = () => {
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
                                {neg=(data.map((item)=>{return (item.ImpactNegatif_gen)}))*1}
                            </div>
                        </div>
                        <div>
                            <div class="service1 uk-card-default uk-card-body">
                                <h6>Aucun Impact</h6>
                                {aucun=(data.map((item)=>{return (item.AucunImpact_gen)}))*1}
                            </div>
                        </div>
                        <div>
                            <div class="service1 uk-card-default uk-card-body">
                                <h6>Impact Positif</h6>
                                {pos=(data.map((item)=>{return(item.ImpactPositif_gen)}))*1}
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
                            document.getElementById('span').innerHTML="<strong style='color:"+d.color+"'>"+d.title+"</strong> représente : "+((d.value/data.map((item)=>{return item.total1*1}))*100).toFixed(2) +"%"
                        } else {
                            console.log("Mouse leave - Index:", i, "Event:", e)
                            document.getElementById('span').innerHTML=""
                        }
                        }}
                    />
                <br/><span style={{color:'white'}} id="span"></span>
                 <hr/>
                 </div>
               
                    
                <div class=" uk-child-width-1-3@s uk-text-center" data-uk-grid="parallax: 30">
                        <div>
                            <div class="service1 uk-card-default uk-card-body">
                                <h6>Impact Négatif monde Rural</h6>
                                {neg=(data.map((item)=>{return (item.ImpactNegatif_Rurale)}))*1}
                            </div>
                        </div>
                        <div>
                            <div class="service1 uk-card-default uk-card-body">
                                <h6>Aucun Impact monde Rural</h6>
                                {aucun=(data.map((item)=>{return (item.AucunImpact_Rurale)}))*1}
                            </div>
                        </div>
                        <div>
                            <div class="service1 uk-card-default uk-card-body">
                                <h6>Impact Positif monde Rural</h6>
                                {pos=(data.map((item)=>{return(item.ImpactPositif_Rurale)}))*1}
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
                            document.getElementById('span1').innerHTML="<strong style='color:"+d.color+"'>"+d.title+"</strong> représente : "+((d.value/data.map((item)=>{return item.total2*1}))*100).toFixed(2) +"%"
                        } else {
                            console.log("Mouse leave - Index:", i, "Event:", e)
                            document.getElementById('span1').innerHTML=""
                        }
                        }}
                    />
                <br/><span style={{color:'white'}} id="span1"></span>
                 <hr/>
                </div>
               
                    
                <div class=" uk-child-width-1-3@s uk-text-center" data-uk-grid="parallax: 30">
                        <div>
                            <div class="service1 uk-card-default uk-card-body">
                                <h6>Impact Négatif monde Urbain</h6>
                                {neg=(data.map((item)=>{return (item.ImpactNegatif_Urbaine)}))*1}
                            </div>
                        </div>
                        <div>
                            <div class="service1 uk-card-default uk-card-body">
                                <h6>Aucun Impact monde Urbain</h6>
                                {aucun=(data.map((item)=>{return (item.AucunImpact_Urbaine)}))*1}
                            </div>
                        </div>
                        <div>
                            <div class="service1 uk-card-default uk-card-body">
                                <h6>Impact Positif monde Urbain</h6>
                                {pos=(data.map((item)=>{return(item.ImpactPositif_Urbaine)}))*1}
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
                            document.getElementById('span2').innerHTML="<strong style='color:"+d.color+"'>"+d.title+"</strong> représente : "+((d.value/data.map((item)=>{return item.total3*1}))*100).toFixed(2) +"%"
                        } else {
                            console.log("Mouse leave - Index:", i, "Event:", e)
                            document.getElementById('span2').innerHTML=""
                        }
                        }}
                    />
                <br/><span style={{color:'white'}} id="span2"></span>
                <hr/>
                </div>
                   

                <div class=" uk-child-width-1-3@s uk-text-center" data-uk-grid="parallax: 30">
                        <div>
                            <div class="service1 uk-card-default uk-card-body">
                                <h6>Impact Négatif <strong>Age ≥ 20</strong></h6>
                                {neg=(data.map((item)=>{return (item.ImpactNegatif_Age)}))*1}
                            </div>
                        </div>
                        <div>
                            <div class="service1 uk-card-default uk-card-body">
                                <h6>Aucun Impact <strong>Age ≥ 20</strong></h6>
                                {aucun=(data.map((item)=>{return (item.AucunImpact_Age)}))*1}
                            </div>
                        </div>
                        <div>
                            <div class="service1 uk-card-default uk-card-body">
                                <h6>Impact Positif <strong>Age ≥ 20</strong></h6>
                                {pos=(data.map((item)=>{return(item.ImpactPositif_Age)}))*1}
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
                            document.getElementById('span3').innerHTML="<strong style='color:"+d.color+"'>"+d.title+"</strong> représente : "+((d.value/(data.map((item)=>{return item.total4*1})))*100).toFixed(2) +"%"
                        } else {
                            console.log("Mouse leave - Index:", i, "Event:", e)
                            document.getElementById('span3').innerHTML=""
                        }
                        }}
                    />
                <br/><span style={{color:'white'}} id="span3"></span>

                </div>   
                </div>
        )
}

export default ImpactEtudiant
