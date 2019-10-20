import React from 'react'
const Button = props => {
  return(
    <button
      onClick={props.onClick}
      type="button"
      id={props.btnState.id}
      className={`button ${props.btnState.id}`}
    >
      {props.btnState.value}
    </button>
  )
}
export default Button
