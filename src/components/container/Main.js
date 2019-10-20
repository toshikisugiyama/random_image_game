import React, {useState} from 'react'
import SwitchButton from './main/SwitchButton'
import Counter from './main/Counter'
import Button from './main/Button'
import Reset from './main/Reset'
const Main = () => {
  const [btnState, setBtnState] = useState(0)
  const clickCount = btnState
  const number = 20
  const images = {
    number: 9,
    path: './img/',
    extension: '.png',
  }
  const counter = number - clickCount + 1
  const handleClick = () => {
    setBtnState(clickCount + 1)
  }
  return(
    <main>
      <div id="img_box" className="img-box">
        <SwitchButton
          count={clickCount}
          counter={counter}
          images={images}
        />
      </div>
      <Counter
        counter={counter}
        count={clickCount}
      />
      <Button
        counter={counter}
        count={clickCount}
        onClick={handleClick}
      />
      <Reset count={clickCount}/>
    </main>
  )
}
export default Main
