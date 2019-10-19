import React, {useState} from 'react'
const Button = () => {
  const [count,setCount] = useState(0)
  let button = (count === 0)?{
    content: 'スタート',
    color: 'start'
  }:{
    content: 'つぎへ',
    color: 'next'
  }
    return(
      <button
        onClick={() => setCount(count + 1)}
        type="button"
        id="start"
        className={`button ${button.color}`}
      >
        {button.content}
      </button>
    )
}
export default Button
