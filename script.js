    (function(){
      'use strict';
      const char = 4;
      const start = document.getElementById('start');
      const next = document.getElementById('next');
      const question = document.getElementById('question');
      const drawing = document.getElementById('drawing');
      const image = document.getElementById('img_box');
      const reset = document.getElementById('reset');

      start.addEventListener('click',function(){
        start.className = 'button start hidden';
        next.className = 'button next';
        question.className = 'question hidden';
        drawing.className = '';
        reset.className = 'button reset';
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

      reset.addEventListener('click',function(){
        start.className = 'button start';
        next.className = 'button next hidden';
        question.className = 'question';
        drawing.className = 'hidden';
        reset.className = 'button reset hidden'
      });

    })();