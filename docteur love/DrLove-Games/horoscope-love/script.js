
const MESSAGES={
 'Bélier':'Ose proposer un rendez-vous spontané: ton énergie séduira.',
 'Taureau':'Moment cocooning recommandé. La stabilité attire aujourd’hui.',
 'Gémeaux':'Parle de ce qui te passionne, les connexions se créent.',
 'Cancer':'Exprime ta tendresse: un message doux fera la différence.',
 'Lion':'Confidence + humour = combo gagnant. Brille sans écraser.',
 'Vierge':'Un geste concret vaut mille mots. Organise un petit plan.',
 'Balance':'Écoute active: cherche l’harmonie avant d’avoir raison.',
 'Scorpion':'Intensité ok, contrôle non. Montre ta vulnérabilité.',
 'Sagittaire':'Propose une mini-aventure proche de chez vous.',
 'Capricorne':'Planifie un objectif à deux, même simple.',
 'Verseau':'Surprends par une idée originale, personnalisée.',
 'Poissons':'Écris quelques lignes du cœur, même imparfaites.'
};
document.getElementById('see').onclick=()=>{
  const s=document.getElementById('sign').value;
  const card=document.getElementById('card');
  if(!s){alert('Choisis un signe');return;}
  card.hidden=false;
  card.innerHTML=`<h3>${s}</h3><p>${MESSAGES[s]}</p>`;
};
