import React, { useEffect } from 'react'
import AllEvent from './detail/Events'

const Event = () => {
    useEffect(() => document.title='PGM-team — Events')
    return (
        <AllEvent />
    );
}

export default Event