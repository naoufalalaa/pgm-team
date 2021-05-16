import React, { Component } from 'react'

export class Events extends Component {
    render(){

        const {videoId} = this.props

        return (
            <div>
                <div style={{cursor:"pointer"}} data-uk-toggle={"target: .video"+videoId.id+" ; animation: uk-animation-slide-left, uk-animation-slide-bottom"} className="uk-card service1 uk-card-default">
                    <div className="uk-card-body">
                        <h6 style={{color:'white',cursor:"pointer"}} className="uk-card-title">{videoId.title}</h6>
                    </div>
                    <div className="uk-card-media-bottom">
                        <div hidden className={"video"+videoId.id}>
                            <iframe src={"https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fwww.facebook.com%2Fn7geeks%2Fvideos%2F"+videoId.id+"%2F&show_text=false&width=560"} title={videoId.title} width="360" height="214" style={{border:'none',overflow:'hidden'}} scrolling="no" frameborder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share" allowFullScreen="true"/>
                            <p width="360" >{videoId.description}</p>
                        </div>
                        <small style={{color:'rgba(255,255,255,0.7)',padding:"5px"}}><i className="fas fa-angle-double-down"></i> {videoId.Creation} <i className="fas fa-angle-double-down"></i> </small>
                    </div>
                </div>
            </div>        
    )

}
}
export default Events
