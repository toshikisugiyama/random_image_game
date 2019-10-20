import React, {useState} from 'react'
import SwitchDisplay from './main/SwitchDisplay'
import Counter from './main/Counter'
import Button from './main/Button'
import Reset from './main/Reset'
const Main = () => {
  const [clickCount, setClickCount] = useState(0)
  const [btnState, setBtnState] = useState({
    value: 'スタート',
    id: 'start',
  })
  const number = 20
  const images = {
    number: 9,
    path: './img/',
    extension: '.png',
  }
  const counter = number - clickCount + 1
  const handleClick = () => {
    setClickCount(clickCount + 1)
    if((counter - 1)===0){
      setBtnState({
        value: 'もういっかい',
        id: 'restart',
      })
    } else if((counter - 2)<=number){
      setBtnState({
        value: 'つぎへ',
        id: 'next',
      })
    }
  }
  return(
    <main>
      <div id="img_box" className="img-box">
        <SwitchDisplay
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
        btnState={btnState}
        onClick={handleClick}
      />
      <Reset count={clickCount}/>
    </main>
  )
}
export default Main
