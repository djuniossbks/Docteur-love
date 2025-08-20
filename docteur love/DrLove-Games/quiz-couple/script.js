
const QUESTIONS=[
 {q:'Quel est le plus important ?', a:['Respect','Argent','Jalousie','Silence'], correct:0},
 {q:'Combien de “je t’aime” par jour ?', a:['0','1','Au moins 2','Autant que possible'], correct:3},
 {q:'Meilleur remède après dispute ?', a:['Ignorer','Parler & s’excuser','Screenshots','Ultimatum'], correct:1},
 {q:'Idée de rendez-vous simple ?', a:['Promenade','Netflix séparé','Scroll TikTok','Dormir'], correct:0},
 {q:'Langage de l’amour universel ?', a:['Temps de qualité','Cadeaux','Contrôle','Tests'], correct:0},
];
let idx=0, score=0;
const qbox=document.getElementById('qbox');
const progress=document.getElementById('progress');
const nextBtn=document.getElementById('next');
function render(){
  const it=QUESTIONS[idx];
  qbox.innerHTML=`<div class="q"><h3>${it.q}</h3><div class="answers"></div></div>`;
  const answers=qbox.querySelector('.answers');
  it.a.forEach((txt,i)=>{
    const b=document.createElement('button'); b.textContent=txt;
    b.onclick=()=>{
      [...answers.children].forEach(x=>x.disabled=true);
      if(i===it.correct){b.classList.add('correct'); score++;}else{b.classList.add('wrong');}
    };
    answers.appendChild(b);
  });
  progress.textContent=`Question ${idx+1}/${QUESTIONS.length}`;
}
render();
nextBtn.onclick=()=>{
  if(idx<QUESTIONS.length-1){ idx++; render(); }
  else{
    document.getElementById('end').hidden=false;
    document.getElementById('score').textContent=score;
    document.getElementById('total').textContent=QUESTIONS.length;
    const p=Math.round((score/QUESTIONS.length)*100);
    let m='';
    if(p>=80)m='Couple en or ✨ Continuez comme ça !';
    else if(p>=60)m='Très bien ! Un peu plus de communication et c’est parfait.';
    else m='Pas grave ! Utilise ces questions pour ouvrir la discussion et vous rapprocher.';
    document.getElementById('message').textContent=m;
  }
};
