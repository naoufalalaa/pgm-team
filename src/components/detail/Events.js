import React from 'react'
import Events from '../detail/allEvent'
import VideoData from '../data/videos.json'

const AllEvent = () => {
    return (
        <div className="Evenement" align="center" style={{marginTop:'10%'}}>
            <div style={{marginRight:'400px'}} className="trait_dessus"><hr/></div>
            <h1 align="center">Tous Les Évènements</h1>
            <div className="uk-child-width-1-2@m uk-grid-match uk-width-3-4@l uk-width-5-6@m uk-text-center" data-uk-grid>
            {VideoData.map((video,index)=>{
                    return <Events videoId={video} key={`post-list-key ${index}`}/>
                    })
            }
            </div>
        </div>
    );
}

export default AllEvent