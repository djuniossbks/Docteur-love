
const CHALLENGES=[
  'Envoie un message mignon maintenant 💬',
  'Planifie un rendez-vous surprise 📅',
  'Donne 3 compliments aujourd’hui ✨',
  'Prépare une playlist love 🎧',
  'Écris une petite lettre ❤️',
  'Fais un selfie duo & poste privé 📸'
];
const wheel=document.getElementById('wheel');
const res=document.getElementById('res');
document.getElementById('spin').onclick=()=>{
  const index=Math.floor(Math.random()*CHALLENGES.length);
  const slice=360/CHALLENGES.length;
  const turns=5+Math.random()*2;
  const angle=index*slice + slice/2;
  const rot=turns*360 + angle;
  wheel.style.transform=`rotate(${rot}deg)`;
  setTimeout(()=>{res.textContent='Défi: '+CHALLENGES[index];},3300);
};
