import React from 'react'

const Comment = ({el}) => {
    return (
        <div>
            <h1>{el.name}</h1>
            <h3>{el.email}</h3>
            <p>{el.body}</p>
            
        </div>
    )
}

export default Comment
