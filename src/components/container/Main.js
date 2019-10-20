import React, {useState} from 'react'
import SwitchQuestionCharacter from './main/SwitchQuestionCharacter'
import Finished from './main/Finished'
import Counter from './main/Counter'
import Button from './main/Button'
import Reset from './main/Reset'
const Main = () => {
  const [btnState, setBtnState] = useState(0)
  const clickCount = btnState
  const handleClick = () => {
    setBtnState(clickCount + 1)
  }
  return(
    <main>
      <div id="img_box" className="img-box">
        <SwitchQuestionCharacter count={clickCount}/>
        <Finished  count={clickCount}/>
      </div>
      <Counter count={clickCount}/>
      <Button
        count={clickCount}
        onClick={handleClick}
      />
      <Reset count={clickCount}/>
    </main>
  )
}
export default Main
