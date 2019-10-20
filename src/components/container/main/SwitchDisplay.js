import React from 'react'
import Question from './switch/Question'
import Character from './switch/Character'
import Finished from './switch/Finished'
const SwitchDisplay = props => {
  if(props.count === 0 && props.counter > 0){
    return <Question />
  }
  if(props.counter===0){
    return <Finished />
  }
  return(
    <Character
      count={props.count}
      counter={props.counter}
      images={props.images}
    />
  )
}
export default SwitchDisplay
