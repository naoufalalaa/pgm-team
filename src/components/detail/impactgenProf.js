import React, { useEffect,useState } from 'react'
import Tabletop from 'tabletop'
import ReactSvgPieChart from "react-svg-piechart"
 
const ImpactProf = () => {
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
                                {neg=(data.map((item)=>{return (item.ImpactNegatifProfesseur_Gen)}))*1}
                            </div>
                        </div>
                        <div>
                            <div class="service1 uk-card-default uk-card-body">
                                <h6>Aucun Impact</h6>
                                {aucun=(data.map((item)=>{return (item.AucunImpactProfesseur_Gen)}))*1}
                            </div>
                        </div>
                        <div>
                            <div class="service1 uk-card-default uk-card-body">
                                <h6>Impact Positif</h6>
                                {pos=(data.map((item)=>{return(item.ImpactPositifProfesseur_gen)}))*1}
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
                            document.getElementById('span0').innerHTML="<strong style='color:"+d.color+"'>"+d.title+"</strong> représente : "+((d.value/data.map((item)=>{return item.total11*1}))*100).toFixed(2) +"%"
                        } else {
                            console.log("Mouse leave - Index:", i, "Event:", e)
                            document.getElementById('span0').innerHTML=""
                        }
                        }}
                    />
                <br/><span style={{color:'white'}} id="span0"></span>
                 <hr/>
                 </div>
               
                    
                <div class=" uk-child-width-1-3@s uk-text-center" data-uk-grid="parallax: 30">
                        <div>
                            <div class="service1 uk-card-default uk-card-body">
                                <h6>Impact Négatif monde Rural</h6>
                                {neg=(data.map((item)=>{return (item.ImpactNegatifProfesseur_Rurale)}))*1}
                            </div>
                        </div>
                        <div>
                            <div class="service1 uk-card-default uk-card-body">
                                <h6>Aucun Impact monde Rural</h6>
                                {aucun=(data.map((item)=>{return (item.AucunImpactProfesseur_Rurale)}))*1}
                            </div>
                        </div>
                        <div>
                            <div class="service1 uk-card-default uk-card-body">
                                <h6>Impact Positif monde Rural</h6>
                                {pos=(data.map((item)=>{return(item.ImpactPositifProfesseur_Rurale)}))*1}
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
                            document.getElementById('span11').innerHTML="<strong style='color:"+d.color+"'>"+d.title+"</strong> représente : "+((d.value/data.map((item)=>{return item.total12*1}))*100).toFixed(2) +"%"
                        } else {
                            console.log("Mouse leave - Index:", i, "Event:", e)
                            document.getElementById('span11').innerHTML=""
                        }
                        }}
                    />
                <br/><span style={{color:'white'}} id="span11"></span>
                 <hr/>
                </div>
               
                    
                <div class=" uk-child-width-1-3@s uk-text-center" data-uk-grid="parallax: 30">
                        <div>
                            <div class="service1 uk-card-default uk-card-body">
                                <h6>Impact Négatif monde Urbain</h6>
                                {neg=(data.map((item)=>{return (item.ImpactNegatifProfesseur_Urbaine)}))*1}
                            </div>
                        </div>
                        <div>
                            <div class="service1 uk-card-default uk-card-body">
                                <h6>Aucun Impact monde Urbain</h6>
                                {aucun=(data.map((item)=>{return (item.AucunImpactProfesseur_Urbaine)}))*1}
                            </div>
                        </div>
                        <div>
                            <div class="service1 uk-card-default uk-card-body">
                                <h6>Impact Positif monde Urbain</h6>
                                {pos=(data.map((item)=>{return(item.ImpactPositifProfesseur_Urbaine)}))*1}
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
                            document.getElementById('span12').innerHTML="<strong style='color:"+d.color+"'>"+d.title+"</strong> représente : "+((d.value/data.map((item)=>{return item.total13*1}))*100).toFixed(2) +"%"
                        } else {
                            console.log("Mouse leave - Index:", i, "Event:", e)
                            document.getElementById('span12').innerHTML=""
                        }
                        }}
                    />
                <br/><span style={{color:'white'}} id="span12"></span>
                <hr/>
                </div>
                   

                
                </div>
        )
}

export default ImpactProf
