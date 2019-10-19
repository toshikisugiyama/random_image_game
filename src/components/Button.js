import React from 'react'
const Button = props => {
  let value = 'スタート'
  let id = 'start'
  if(props.count>0){
    value = 'つぎへ'
    id = 'next'
  }
  return(
    <button
      onClick={props.onClick}
      type="button"
      id={id}
      className={`button ${id}`}
    >
      {value}
    </button>
  )
}
export default Button
