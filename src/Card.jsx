import React from 'react'
import './App.css'
const Card = (props) => {
  return (
    <div className='card-main'>
        <div className="card">
            <div className="image">
                <img src={props.image} alt='avatar'/>
            </div>
            <div className="content">
                <div>{props.id}</div>
                <div>{props.firstName} {props.lastName}</div>
                <div>{props.email}</div>
            </div>
        </div>
    </div>
  )
}

export default Card