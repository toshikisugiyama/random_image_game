import React from 'react'
const Counter = props => {
  if(props.count>0){
    return(
      <span className="counter">
        {props.counter}
      </span>
    )
  }
  return <div></div>
}
export default Counter
