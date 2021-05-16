import React, { useEffect,useState } from 'react'
import Tabletop from 'tabletop'
import Histogram from 'react-chart-histogram';

const SatisfactionETuCP = () => {
        const [data, setData] = useState([]);
        
        useEffect(() => {
          Tabletop.init({
            key: "15TqqnJOUsMDklItAcLd-_lzv0dxNm3_ln3An5y72HxA",
            simpleSheet: true
          })
            .then((data) => setData(data))
            .catch((err) => console.warn(err));
        }, []);
        const options = { fillColor: '#59E146', strokeColor: '#59E146' };
        const val1=(data.map((item)=>{return item.satisfactionCours_Cycle})*1).toFixed(2)
        const val2=(data.map((item)=>{return item.satisfactionTD_Cycle})*1).toFixed(2)
        const values = [val1,val2]
        const labels = ["Cours "+val1,"TD/TP "+val2];
        const val3=(data.map((item)=>{return item.satisfactionCours_DUT})*1).toFixed(2)
        const val4=(data.map((item)=>{return item.satisfactionTD_DUT})*1).toFixed(2)
        const values1 = [val3,val4]
        const labels1 = ["Cours "+val3,"TD/TP "+val4];
        const val5=(data.map((item)=>{return item.satisfactionCours_LP})*1).toFixed(2)
        const val6=(data.map((item)=>{return item.satisfactionTD_LP})*1).toFixed(2)
        const labels2 = ["Cours "+val5,"TD/TP "+val6];
        const value = [val5,val6]
        const val7=(data.map((item)=>{return item.satisfactionCours_Mi})*1).toFixed(2)
        const val8=(data.map((item)=>{return item.satisfactionTD_Mi})*1).toFixed(2)
        const values3 = [val7,val8]
        const labels3 = ["Cours "+val7,"TD/TP "+val8];
        return (
            <div style={{color:'white'}}>
                <div className="uk-grid-match uk-child-width-1-2@m uk-text-center" data-uk-grid>
                    <div>
                        <div className="uk-card-transparent uk-card-body">
                            <h5>Satisfaction Cours <strong>Cycle d'ingénieur</strong>:</h5>
                            <div>
                                <Histogram
                                    xLabels={labels}
                                    yValues={values}
                                    width='300'
                                    height='300'
                                    options={options}
                                />
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="uk-card-transparent uk-card-body">
                            <h5>Satisfaction Cours et TD <strong>DUT</strong>:</h5>
                            <div>
                                <Histogram
                                    xLabels={labels1}
                                    yValues={values1}
                                    width='300'
                                    height='300'
                                    options={options}
                                />
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="uk-card-transparent uk-card-body">
                            <h5>Satisfaction Cours et TD <strong>Département Mathématique informatique</strong>:</h5>
                            <div>
                                <Histogram
                                    xLabels={labels3}
                                    yValues={values3}
                                    width='300'
                                    height='300'
                                    options={options}
                                />
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="uk-card-transparent uk-card-body">
                            <h5>Satisfaction Cours et TD <strong>Licence Professionnelle</strong>:</h5>
                            <div>
                                <Histogram
                                    xLabels={labels2}
                                    yValues={value}
                                    width='300'
                                    height='300'
                                    options={options}
                                />
                            </div>
                        </div>
                    </div>
            </div>
            </div>
        )
}

export default SatisfactionETuCP
