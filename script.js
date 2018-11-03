    (function(){
      'use strict';
      const char = 3;
      const start = document.getElementById('start');
      const next = document.getElementById('next');
      const question = document.getElementById('question');
      const drawing = document.getElementById('drawing');
      const image = document.getElementById('img_box');
      const finish = document.getElementById('finish');

      start.addEventListener('click',function(){
        start.className = 'button start hidden';
        next.className = 'button next';
        question.className = 'question hidden';
        drawing.className = '';
        finish.className = 'button finish';
        next.click();
        // const randNum = Math.floor(Math.random()*char);
        // drawing.src = 'img/' + randNum + '.png';
      });

      next.addEventListener('click',function(){
        const randNum = Math.floor(Math.random()*char);
        drawing.src = 'img/' + randNum + '.png';
      });

      image.addEventListener('click',function(){
        start.click();
      });

      finish.addEventListener('click',function(){
        start.className = 'button start';
        next.className = 'button next hidden';
        question.className = 'question';
        drawing.className = 'hidden';
        finish.className = 'button finish hidden'
      });

    })();