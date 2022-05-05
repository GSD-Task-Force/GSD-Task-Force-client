import React from 'react'
import { Link } from 'react-router-dom'

function CheckedCard (props) {
  return (
    <div className='card' key={props._id}>
      <input className='check'
        type='checkbox'
        value={props.clicked}
        name={props._id}
        checked={props.checked}
        onClick={props.handleClick}></input>
      <div className='card-body'>
        <Link to={`/tasks/${props._id}`}>
          <h5 className='card-title' style={{ textDecoration: 'line-through' }}>
            {props.title}
          </h5>
        </Link>
        <p className='card-text' style={{ textDecoration: 'line-through' }}>
          {props.description}
        </p>
        <p className='card-text' style={{ textDecoration: 'line-through' }}>
          {props.date}
        </p>
      </div>
    </div>
  )
}

export default CheckedCard
