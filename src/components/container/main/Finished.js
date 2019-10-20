import React from 'react'
const Finished = props => {
  if(props.counter===0){
    return(
      <span className="finished">
        おわり
      </span>
    )
  }
  return <div></div>
}
export default Finished
