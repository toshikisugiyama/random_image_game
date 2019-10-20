import React from 'react'
const Button = props => {
  let value = 'スタート'
  let id = 'start'
  if(props.count>0 && props.counter>0){
    value = 'つぎへ'
    id = 'next'
  } else if(props.counter===0){
    value = 'もういっかい'
    id = 'restart'
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
