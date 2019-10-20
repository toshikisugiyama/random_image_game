import React, {useState} from 'react'
import SwitchQuestionCharacter from './main/SwitchQuestionCharacter'
import Finished from './main/Finished'
import Counter from './main/Counter'
import Button from './main/Button'
import Reset from './main/Reset'
const Main = () => {
  const [btnState, setBtnState] = useState(0)
  const clickCount = btnState
  const number = 20
  const counter = number - clickCount + 1
  const handleClick = () => {
    setBtnState(clickCount + 1)
  }
  return(
    <main>
      <div id="img_box" className="img-box">
        <SwitchQuestionCharacter count={clickCount}/>
        <Finished
          counter={counter}
          count={clickCount}
        />
      </div>
      <Counter
        counter={counter}
        count={clickCount}
      />
      <Button
        count={clickCount}
        onClick={handleClick}
      />
      <Reset count={clickCount}/>
    </main>
  )
}
export default Main
