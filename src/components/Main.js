import React from 'react'
const Main = () => {
  return(
    <main>
      <div id="img_box" className="img-box">
        <span id="question" className="question">?</span>
        <img id="drawing" src="" alt="An image of nanja monja" className="hidden" />
        <span id="finished" className="finished hidden">おわり</span>
      </div>
      <span id="counter" className="counter hidden"></span>
      <button type="button" id="start" className="button start">スタート</button>
      <button type="button" id="next" className="button next hidden">つぎへ</button>
      <button type="button" id="reset" className="button reset hidden"></button>
    </main>
  )
}
export default Main
