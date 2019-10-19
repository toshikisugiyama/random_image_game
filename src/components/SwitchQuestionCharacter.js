import React from 'react'
import Question from './Question'
import Character from './Character'
const SwitchQuestionCharacter = props => {
  if(props.count===0){
    return <Question />
  }
  return <Character />
}
export default SwitchQuestionCharacter
