import React, { useEffect } from 'react'
import Comp1 from './detail/Compartim1'
import Comp2 from './detail/Compartim2'
import Comp3 from './detail/Compartim3'
const Home = ()=> {

    useEffect( () => document.title='PGM-team')
    return (
        <div className="Home">
            <Comp1/>
            <Comp2/>
            <Comp3/>
        </div>
    )

}

export default Home
