let studyMinutes=25,breakMinutes=5,timeLeft=studyMinutes*60,timer=null;
const timerDisplay=document.getElementById('timer');
const status=document.getElementById('status');
function update(){let m=Math.floor(timeLeft/60),s=timeLeft%60;timerDisplay.innerText=String(m).padStart(2,'0')+':'+String(s).padStart(2,'0');}
function start(){if(timer)return;timer=setInterval(()=>{if(timeLeft>0){timeLeft--;update();}else{clearInterval(timer);timer=null;alert("Time's up!");status.innerText="Session Completed 🎉";}},1000);}
function pause(){clearInterval(timer);timer=null;}
function reset(){pause();timeLeft=studyMinutes*60;status.innerText="Ready to Study 🚀";update();}
document.getElementById('start').onclick=start;
document.getElementById('pause').onclick=pause;
document.getElementById('reset').onclick=reset;
document.getElementById('study').onclick=()=>{pause();studyMinutes=25;timeLeft=studyMinutes*60;status.innerText='Study Session 📚';update();};
document.getElementById('break').onclick=()=>{pause();timeLeft=breakMinutes*60;status.innerText='Break Time ☕';update();};
update();