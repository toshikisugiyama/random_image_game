    (function(){
      'use strict';
      const char = 6;
      const start = document.getElementById('start');
      const next = document.getElementById('next');
      const question = document.getElementById('question');
      const drawing = document.getElementById('drawing');
      const image = document.getElementById('img_box');
      const reset = document.getElementById('reset');
      const counter = document.getElementById('counter');
      let c = 0;

      start.addEventListener('click',function(){
        start.className = 'button start hidden';
        next.className = 'button next';
        question.className = 'question hidden';
        drawing.className = '';
        counter.className = 'counter';
        reset.className = 'button reset';
        next.click();
        c = 1;
        counter.innerHTML = c;
      });

      next.addEventListener('click',function(){
        const randNum = Math.floor(Math.random()*char);
        drawing.src = 'img/' + randNum + '.png';
        c++;
        counter.innerHTML = c;
      });

      image.addEventListener('click',function(){
        if (c===0) {
          start.click();
        }else{
          next.click();
        }
      });

      reset.addEventListener('click',function(){
        start.className = 'button start';
        next.className = 'button next hidden';
        question.className = 'question';
        drawing.className = 'hidden';
        reset.className = 'button reset hidden'
        counter.className = 'counter hidden';
        c = 0;
      });


      function escapeHtml(str) {
        str = str.replace(/&/g, '&amp;');
        str = str.replace(/</g, '&lt;');
        str = str.replace(/>/g, '&gt;');
        str = str.replace(/"/g, '&quot;');
        str = str.replace(/'/g, '&#39;');
        return str;
      }


    })();