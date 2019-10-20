import React from 'react'
import Question from './switch/Question'
import Character from './switch/Character'
import Finished from './switch/Finished'
const SwitchDisplay = props => {
  const count = props.count
  const number = props.number
  const images = props.images
  if(count === 0){
    return <Question />
  }
  if(count > number){
    return <Finished />
  }
  return(
    <Character
      count={count}
      number={number}
      images={images}
    />
  )
}
export default SwitchDisplay
