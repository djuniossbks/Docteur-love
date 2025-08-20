
const ICONS=['❤','💐','💍','💌','🍫','🎁','😘','🎵'];
let first=null, lock=false, moves=0, time=0, timer=null, matched=0;
const movesEl=document.getElementById('moves');
const timeEl=document.getElementById('time');
const board=document.getElementById('board');
function shuffle(a){for(let i=a.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[a[i],a[j]]=[a[j],a[i]];}return a;}
function start(){
  clearInterval(timer); time=0; timeEl.textContent=0; moves=0; movesEl.textContent=0; matched=0; first=null; lock=false;
  timer=setInterval(()=>{time++; timeEl.textContent=time;},1000);
  const tiles=shuffle([...ICONS,...ICONS]).map((icon,i)=>({id:i,icon,revealed:false,done:false}));
  board.innerHTML='';
  tiles.forEach(t=>{
    const el=document.createElement('div'); el.className='card'; el.dataset.icon=t.icon; el.textContent='❥';
    el.onclick=()=>{
      if(lock||t.done||el.classList.contains('revealed')) return;
      el.classList.add('revealed'); el.textContent=t.icon;
      if(!first){ first={el,icon:t.icon}; return; }
      moves++; movesEl.textContent=moves;
      if(first.icon===t.icon){
        t.done=true; first.el.classList.add('revealed'); matched+=2; first=null;
        if(matched===ICONS.length*2){ clearInterval(timer); alert(`Bravo ! ${moves} coups en ${time}s ❤`); }
      }else{
        lock=true;
        setTimeout(()=>{
          el.classList.remove('revealed'); el.textContent='❥';
          first.el.classList.remove('revealed'); first.el.textContent='❥';
          first=null; lock=false;
        },700);
      }
    };
    board.appendChild(el);
  });
}
start();
