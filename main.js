const STOP_WATCH = document.getElementById('stop_watch');
const START = document.getElementById('start');
const STOP = document.getElementById('stop');
const RESET = document.getElementById('reset');

let minutes = 0; //初期値０
let seconds = 0; //初期値０

let stopWatch = () => {
  seconds ++; //初期値に１ずつ足していく
  if (seconds >=60 ) {
    minutes ++;
    seconds = 0;
  }else{
  //位を２個下げて０００１とかにならないようにするためのslice
  STOP_WATCH.innerHTML = ('00' + minutes).slice(-2) + ":" + ('00' + seconds).slice(-2) ;
  }
 
 }


let interval;
//クリックしたら１秒ずつ時間のカウントが始まるsetinterval()
 START.addEventListener('click',() => {
  interval =setInterval(stopWatch,1000);
  START.disabled = true;//押せる、押せない
  STOP.disabled = false;
  RESET.disabled = true;
 })
//ストップをクリックしたら{}のように止まる
 STOP.addEventListener('click',() => {
   clearInterval(interval);
  START.disabled = false;
  STOP.disabled = true;
  RESET.disabled = false;
 })
 //リセットをクリックしたら秒数も分数も０
 RESET.addEventListener('click',() => {
   STOP_WATCH.innerHTML = '00:00';
   minutes = 0;
   seconds = 0;
  START.disabled = false;
  STOP.disabled = true;
  RESET.disabled = true;
 })
