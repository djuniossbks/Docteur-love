
const RIDDLES=[
 {q:'Je grandis quand on la partage et je me brise dans le silence. Qui suis-je ?', a:'confiance'},
 {q:'Je ne coûte rien mais vaux beaucoup, et sans moi l’amour se fane.', a:'respect'},
 {q:'Je prends du temps, je crée des souvenirs et rapproche les cœurs.', a:'qualité', alt:'temps de qualité'}
];
const ANAGRAMS=['AMOUR','TENDRESSE','BISOUS','CÂLIN'];
let i=0;
const q=document.getElementById('question');
const ans=document.getElementById('answer');
const fb=document.getElementById('feedback');
const mixEl=document.getElementById('mix');
const an=document.getElementById('an');
const fbAn=document.getElementById('fbAn');
function shuffle(s){return s.split('').sort(()=>Math.random()-0.5).join('');}
function render(){
  const r=RIDDLES[i%RIDDLES.length];
  q.textContent=r.q; ans.value=''; fb.textContent='';
  const word=ANAGRAMS[i%ANAGRAMS.length];
  mixEl.textContent=shuffle(word);
  an.value=''; fbAn.textContent='';
}
document.getElementById('check').onclick=()=>{
  const r=RIDDLES[i%RIDDLES.length];
  const val=ans.value.trim().toLowerCase();
  const good=[r.a, r.alt].filter(Boolean);
  fb.textContent= good.some(g=>val===g.toLowerCase()) ? 'Bravo ❤' : 'Pas tout à fait… essaie encore !';
};
document.getElementById('checkAn').onclick=()=>{
  const word=ANAGRAMS[i%ANAGRAMS.length].toLowerCase();
  fbAn.textContent = an.value.trim().toLowerCase()===word ? 'Exact ! 💮' : 'Presque !';
};
document.getElementById('next').onclick=()=>{i++; render();};
render();
