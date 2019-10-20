import React from 'react'
const Character = props => {
  const count = props.count
  const number = props.number
  const min = 0
  const max = props.images.number
  const path = props.images.path
  const extension = props.images.extension
  const getRandomInt = (min, max) => {
    min = Math.ceil(min)
    max = Math.floor(max)
    return Math.floor(Math.random() * (max - min)) + min
  }
  const showImage = () => {
    return path + getRandomInt(min, max) + extension
  }
  if(count>0 && count<=number){
    return(
      <img
        src={showImage()}
        alt="character"
        width="100%"
        height="100%"
      />
    )
  }
  return <div></div>
}
export default Character
