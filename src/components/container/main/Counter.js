import React from 'react'
const Counter = props => {
  const number = 20
  const counter = number - props.count + 1
  if(props.count>0){
    return(
      <span className="counter">
        {counter}
      </span>
    )
  }
  return <div></div>
}
export default Counter
