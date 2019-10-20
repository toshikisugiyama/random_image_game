import React, {useState} from 'react'
import SwitchDisplay from './main/SwitchDisplay'
import Counter from './main/Counter'
import Button from './main/Button'
import Reset from './main/Reset'
const Main = () => {
  const [count, setCount] = useState(0)
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
  const counter = number - count + 1
  const handleClick = () => {
    setCount(count + 1)
    if(count === number){
      setBtnState({
        value: 'もういっかい',
        id: 'restart',
      })
    }
    if(count === 0 && count < number){
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
          count={count}
          number={number}
          images={images}
        />
      </div>
      <Counter
        counter={counter}
        count={count}
      />
      <Button
        btnState={btnState}
        onClick={handleClick}
      />
      <Reset
        count={count}
        number={number}
      />
    </main>
  )
}
export default Main
