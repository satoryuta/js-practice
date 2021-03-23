'use strict';

// {
//   const btn = document.getElementById('btn');

//   btn.addEventListener('click', () => {
//     // const results = ['大吉','中吉','凶','末吉'];
//     // const results = ['大吉','大吉','大吉','大吉','凶'];
    
//     // btn.textContent = results[Math.floor(Math.random() * results.length)];
    
//     const n = Math.random();
//     if (n < 0.05) {
//       btn.textContent = '大吉';//5%

//     }else if (n < 0.2) {
//       btn.textContent = '中吉'//15%
//     }else {
//       btn.textContent = '凶';//80%
//     }


//   })
// }

{
  const btn = document.querySelector('div');

  let LukAfter ='';
  btn.addEventListener('click', () => {  
    let n = Math.random();
    let luk;
    let cnt = 0;

    if (n <= 0.3){
      luk = '大吉'
    }else if (n > 0.3 && n <=0.8) {
      luk = '中吉'
    }else{
      luk = '凶'
    }
  

    if (luk === LukAfter) {
      
      while (luk === LukAfter) {
        cnt++
        console.log('true'+cnt);
        n = Math.random();
        if (n <= 0.3){
          luk = '大吉'
        }else if (n > 0.3 && n <=0.8) {
          luk = '中吉'
        }else{
          luk = '凶'
        }
      }
    }
    


    if (luk === '大吉') {
      LukAfter = luk;
      btn.textContent = '大吉';//10%
      btn.setAttribute('id','daiki')
    }else if (luk === '中吉') {
      LukAfter = luk;
      btn.textContent = '中吉'//40%
      btn.setAttribute('id','btn')
    }else {
      LukAfter = luk;
      btn.textContent = '凶';//50%
      btn.setAttribute('id','kyou');
    }
    

  })
}