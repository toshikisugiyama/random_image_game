import React from 'react'
const Modal = props => {
  return(
    <div className="modal">
      <h2>説明</h2>
      <p>これは、現れるキャラクターに、その人のセンスで特徴を捉えた名前を付け、全員で共有し、以降もし同じものが現れたらその名前をいち早く叫んで、いち早く名前を叫んだキャラクターの数を競うゲームです。おかしな名前を付けたり、最初のうちに「簡単」と侮っていたら途中でまったく思い出せなくなったりと、笑いが絶えずに盛り上がります。</p>
      <ol type="1">
        <li>1人ずつ代わりばんこに、ボタンを押します。</li>
        <li>現れたのが初めて見るキャラクターだったら、自由な発想で、ふさわしいと思う名前を付けます。</li>
        <li>付けられた名前は、あとで同じ絵のキャラクターが出てきたらすばやく言えるように、しっかり覚えておきましょう。そして、またボタンを押して…とくり返していきます。</li>
        <li>すでに名前が付けられたキャラクターが現れたら、誰でもいいので、すばやく正しい名前を言います。一番多く名前を言い当てた人が勝ちです。</li>
      </ol>
      <div className="button">
        <button>OK</button>
      </div>
    </div>
  )
}
export default Modal
