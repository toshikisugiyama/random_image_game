import React from 'react'
const Character = props => {
  let count = props.count
  const images = 9
  const min = 0
  const max = images
  const path = './img/'
  const extension = '.png'
  const getRandomInt = (min, max) => {
    min = Math.ceil(min)
    max = Math.floor(max)
    return Math.floor(Math.random() * (max - min)) + min
  }
  const showImage = () => {
    if(count>0){
      return path + getRandomInt(min, max) + extension
    }
  }
  return(
    <img
      src={showImage()}
      alt="character"
      width="100%"
      height="100%"
    />
  )
}
export default Character
