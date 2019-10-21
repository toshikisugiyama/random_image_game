import React, {useState} from 'react'
import Modal from './main/Modal'
import SwitchDisplay from './main/SwitchDisplay'
import Counter from './main/Counter'
import Button from './main/Button'
import Reset from './main/Reset'
const Main = () => {
  // 表示回数
  const number = 20
  // 画像数とパス
  const images = {
    number: 9,
    path: './img/',
    extension: '.png',
  }
  // カウント
  const [count, setCount] = useState(0)
  // 説明用モーダル
  const [modal, setModal] = useState({
    state: false,
    clicked: false,
  })
  // ボタン
  const [btnState, setBtnState] = useState({
    value: '説明',
    id: 'explanation',
  })
  // カウンター
  const counter = number - count + 1
  // クリック時の挙動
  const handleClick = () => {
    setCount(count + 1)
    if(modal.clicked===false){
      setCount(0)
      setModal({
        state: true,
        clicked: true,
      })
    }
    if(count === number){
      setBtnState({
        value: 'もういっかい',
        id: 'restart',
      })
    }
    if(count < number){
      setBtnState({
        value: 'つぎへ',
        id: 'next',
      })
    }
  }
  // リセット
  const handleReset = () => {
    setCount(0)
    setBtnState({
      value: '説明',
      id: 'explanation',
    })
    setModal({
      state: false,
      clicked: false,
    })
  }
  // モーダル
  const handleModal = () => {
    setModal({
      state: false,
      clicked: true,
    })
    setBtnState({
      value: 'スタート',
      id: 'start',
    })
  }
  return(
    <main>
      <Modal
        modal={modal}
        onClick={handleModal}
      />
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
        count={count}
        onClick={(count>number)?handleReset:handleClick}
      />
      <Reset
        count={count}
        number={number}
        onClick={handleReset}
      />
    </main>
  )
}
export default Main
