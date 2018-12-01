    (function(){
      'use strict';
      const char = 8,
            start = document.getElementById('start'),
            next = document.getElementById('next'),
            finished = document.getElementById('finished'),
            question = document.getElementById('question'),
            drawing = document.getElementById('drawing'),
            image = document.getElementById('img_box'),
            reset = document.getElementById('reset'),
            counter = document.getElementById('counter');
      let c = 0;

      start.addEventListener('click',function(){
        start.className = 'button start hidden';
        next.className = 'button next';
        question.className = 'question hidden';
        drawing.className = '';
        counter.className = 'counter';
        reset.className = 'button reset';
        next.click();
        c = 20;
        counter.innerHTML = c;
      });

      next.addEventListener('click',function(){
        const randNum = Math.floor(Math.random()*char);
        drawing.src = 'img/' + randNum + '.png';
        c--;
        counter.innerHTML = c;
        finished.className = 'hidden';
        if (c===0) {
          drawing.className = 'hidden';
          counter.className = 'counter hidden';
          start.className = 'button start';
          next.className = 'button next hidden';
          finished.className = 'finished';
        }
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
        finished.className = 'finished hidden';
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