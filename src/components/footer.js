import React, { Component } from 'react'
import react from './react.png'
export class Footer extends Component {
    render() {
        return (
        <div className="Footer">
            <svg className="footer" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#1e1e4f" fillOpacity="1" d="M0,320L180,256L360,128L540,256L720,128L900,224L1080,160L1260,128L1440,128L1440,320L1260,320L1080,320L900,320L720,320L540,320L360,320L180,320L0,320Z"></path></svg>
            <p align="center" style={{color:'#59E146',opacity:1,backgroundColor:'#191a44',marginTop:0,marginBottom:0}}>&copy; Copyright PGM-Team | Powered by : <img src={react} width="30px" alt="reactJS"/></p>
        </div>
        )
    }
}

export default Footer
