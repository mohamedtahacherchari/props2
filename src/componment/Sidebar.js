import React from 'react'
import { suggestions } from './Data';
import Video from './Video';


const Sidebar = () => {
    return (
        <div className="sidebar">
            {suggestions.map(el =><Video  el={el}/>)}
        </div>
    )
}

export default Sidebar
