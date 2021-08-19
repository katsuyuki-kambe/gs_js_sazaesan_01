
'use strict';

(() => {
  const HAND_FORMS = [
    0, // パー
    1, // グー
    2  // チョキ
  ];
  
  let isPause = false;
  let currentFrame = 0;

  function draw(canvas, context, imageObject, frame) {
    context.drawImage(
      imageObject,
      sx,
      0,
      swidth,
      imageObject.height,
      0,
      0,
      swidth,
      canvas.height
    );
  }
  function setButtonAction() {
    const rock = document.getElementById('rock');
    const scissors = document.getElementById('scissors');
    const paper = document.getElementById('paper');

    function onClick(event) {
var screen = document.getElementById('screen');
 screen.style.display = 'none';

var suji = Math.floor(Math.random()*3);

    if (suji === 0) {
      kekka1.style.display = 'block';


    } else if (suji=== 1) {
      kekka2.style.display = 'block';


    } else {
      kekka3.style.display = 'block';


    }
      const myHandType = parseInt(event.target.value, 10);
      isPause = true;
      judge(myHandType, suji);
    }

    rock.addEventListener('click', onClick);
    scissors.addEventListener('click', onClick);
    paper.addEventListener('click', onClick);
  }

  function setButtonAction2() {
    const restart = document.getElementById('restart');
    restart.addEventListener('click', function () {
      window.location.reload();
    });
  }


var dialog1 = document.getElementById('dialog1');
var dialog2 = document.getElementById('dialog2');
var dialog3 = document.getElementById('dialog3');
var hikiwake = document.getElementById('hikiwake');
var kati = document.getElementById('kati');
var make = document.getElementById('make');

  function judge(myHandType, suji) {
    // 0: 引き分け, 1: 負け, 2: 勝ち
    // じゃんけんの勝敗判定のアルゴリズム: https://qiita.com/mpyw/items/3ffaac0f1b4a7713c869
    const result = (myHandType - suji + 3) % HAND_FORMS.length;

    if (result === 1) {
      dialog1.style.display = 'block';
      hikiwake.style.display = 'block';
    } else if (result === 2) {
      dialog2.style.display = 'block';
      make.style.display = 'block';
    } else {
      dialog3.style.display = 'block';
      kati.style.display = 'block';
    }
  }
  setButtonAction();
  setButtonAction2();
  main();
})();

