import React from 'react'
import Question from './switch/Question'
import Character from './switch/Character'
const SwitchQuestionCharacter = props => {
  if(props.count===0){
    return <Question />
  }
  return <Character count={props.count} />
}
export default SwitchQuestionCharacter
