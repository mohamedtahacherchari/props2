import React from 'react'
import Comment from "./Comment"
//import {suggestions} from "./Data"
import {commentList} from "./Data"
//import Video from './Video'
const Comments = () => {
    return (
        <div className ="comments" style={{width :"40%"}}>
            {commentList.map( el =><Comment el={el}/>)}
        </div>
    )
}

export default Comments
