import React, {useState} from 'react'
import Question from './Question'
import Character from './Character'
import Finished from './Finished'
import Counter from './Counter'
import Button from './Button'
import Reset from './Reset'
const Main = () => {
  const [btnState, setBtnState] = useState(0)
  const clickCount = btnState
  const handleClick = () => {
    setBtnState(clickCount + 1)
  }
  return(
    <main>
      <div id="img_box" className="img-box">
        <Question count={clickCount}/>
        <Character count={clickCount}/>
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
