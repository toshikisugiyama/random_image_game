import React, {useState} from 'react'
import SwitchDisplay from './main/SwitchDisplay'
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
        <SwitchDisplay
          count={clickCount}
          counter={counter}
          images={images}
        />
      <Reset count={clickCount}/>
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
    </main>
  )
}
export default Main
