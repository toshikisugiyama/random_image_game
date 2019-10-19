import React from 'react'
import Question from './Question'
import Character from './Character'
import Finished from './Finished'
import Counter from './Counter'
import Button from './Button'
import Reset from './Reset'
const Main = () => {
  return(
    <main>
      <div id="img_box" className="img-box">
        <Question />
        <Character />
        <Finished />
      </div>
      <Counter />
      <Button />
      <Reset />
    </main>
  )
}
export default Main
