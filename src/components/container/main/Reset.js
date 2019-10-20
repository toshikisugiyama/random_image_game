import React from 'react'
const Reset = props => {
  const count = props.count
  const number = props.number
  if(count>0 && count<=number){
    return(
      <button
        type="button"
        className="button reset"
        onClick={props.onClick}
      ></button>
    )
  }
  return <div></div>
}
export default Reset
