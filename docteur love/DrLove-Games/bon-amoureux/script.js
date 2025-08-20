
const DATA=[
 {s:'Ton/ta partenaire rentre fatigué(e). Tu…', a:[
   {t:'Prépares un petit snack et écoutes', p:3},
   {t:'Parles de tes problèmes', p:1},
   {t:'Proposes une activité légère', p:2}
 ]},
 {s:'Tu découvres un malentendu', a:[
   {t:'Tu demandes calmement des explications', p:3},
   {t:'Tu fais la tête 2 jours', p:0},
   {t:'Tu en parles par message uniquement', p:1}
 ]},
 {s:'Anniversaire oublié 😬', a:[
   {t:'Tu reconnais, t’excuses et organises un moment', p:3},
   {t:'Tu offres un gros cadeau pour compenser', p:2},
   {t:'Tu te justifies et passes', p:0}
 ]},
 {s:'Réseaux sociaux', a:[
   {t:'Tu poses des limites claires & respectes', p:3},
   {t:'Tu fouilles le téléphone', p:0},
   {t:'Tu fais semblant que tout va bien', p:1}
 ]},
];
let i=0, score=0;
const app=document.getElementById('app');
function render(){
  if(i>=DATA.length){
    const percent=Math.round(score/(DATA.length*3)*100);
    let badge= percent>=85?'Expert ❤': percent>=60?'Très bon 💞':'En progrès 💪';
    app.innerHTML=`<div class="summary"><h2>Résultat: ${percent}% — ${badge}</h2>
    <p>${percent>=60?'Continue d’écouter, communiquer, surprendre.':'Travaille l’écoute active et les petites attentions régulières.'}</p>
    <button class="btn" onclick="location.reload()">Rejouer</button></div>`;
    return;
  }
  const it=DATA[i];
  app.innerHTML=`<div class="card"><h3>${it.s}</h3><div class="choice"></div></div>`;
  const c=app.querySelector('.choice');
  it.a.forEach(o=>{
    const b=document.createElement('button'); b.textContent=o.t;
    b.onclick=()=>{score+=o.p; i++; render();};
    c.appendChild(b);
  });
}
render();
