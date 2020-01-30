import React from 'react'



function Comment (props){
  return(
    <li>
    <span>{props.data.body}</span>
    <span> Enviado por {props.data.user}</span>
    </li>
    )
}

export default Comment
