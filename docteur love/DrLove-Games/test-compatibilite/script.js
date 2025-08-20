
const QUESTIONS = [
  {q:'Quand il/elle stresse, tu…', a:[['Rassures et écoutes',3],['Évites le sujet',1],['Donnes des solutions directes',2]]},
  {q:'Gestion du temps ensemble ?', a:[['Rendez-vous planifiés',2],['Spontané total',2],['Mix des deux',3]]},
  {q:'Conflits :', a:[['On parle calmement',3],['On laisse passer',2],['On s’ignore',0]]},
  {q:'Budget & cadeaux :', a:[['Petites attentions fréquentes',3],['Gros cadeaux rares',2],['Rien de spécial',0]]},
  {q:'Langage de l’amour principal :', a:[['Mots',2],['Gestes/Services',3],['Cadeaux',1]]},
  {q:'Jalousie :', a:[['Confiance',3],['Parfois',2],['Forte',0]]},
  {q:'Projets futurs :', a:[['On en parle',3],['Pas encore',1],['Jamais',0]]},
  {q:'Communication au quotidien :', a:[['Messages/ appels réguliers',3],['Quand on peut',2],['Rare',0]]},
  {q:'Espace perso :', a:[['Respecté',3],['Parfois',2],['Jamais',0]]},
  {q:'Humour & complicité :', a:[['Beaucoup',3],['Un peu',2],['Peu',1]]},
];
const quiz = document.getElementById('quiz');
QUESTIONS.forEach((item, i)=>{
  const div=document.createElement('div'); div.className='q';
  const h=document.createElement('h3'); h.textContent=(i+1)+'. '+item.q; div.appendChild(h);
  item.a.forEach((opt, j)=>{
    const id='q'+i+'_'+j;
    const lab=document.createElement('label');
    lab.innerHTML=`<input type="radio" name="q${i}" value="${opt[1]}" required> ${opt[0]}`;
    div.appendChild(lab);
  });
  quiz.appendChild(div);
});
document.getElementById('submit').addEventListener('click', ()=>{
  const vals=[...document.querySelectorAll('input[type=radio]:checked')].map(i=>+i.value);
  if(vals.length<QUESTIONS.length){alert('Réponds à toutes les questions 😉');return;}
  const score=vals.reduce((a,b)=>a+b,0);
  const max=QUESTIONS.length*3;
  const percent=Math.round((score/max)*100);
  document.getElementById('percent').textContent=percent+'%';
  const adv=document.getElementById('advice');
  let msg='';
  if(percent>=85) msg="Âmes sœurs en vue ! Continuez vos rituels d’attention et gardez l’honnêteté.";
  else if(percent>=65) msg="Très belle base. Renforcez la communication et planifiez des moments de qualité.";
  else if(percent>=45) msg="Potentiel présent. Instaurez des règles simples: écoute active, rendez-vous réguliers.";
  else msg="Besoin d’alignement. Parlez besoins, limites et objectifs. Petits gestes quotidiens !";
  adv.textContent=msg;
  document.getElementById('result').hidden=false;
  window.scrollTo({top:document.body.scrollHeight,behavior:'smooth'});
});
