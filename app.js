// 3GASDRIVE DGT CAT 2026 - 380 PREGUNTES DGT 2026
const VERSION = "v8.9-CAT";

// COMBO DOPAMINA
const EMOJIS_ACIERTO = ['🚀','💎','👑','🔥','💯','⚡','🏆','🦄','🤑','✅','💪','😎','🎯','💥','🌟','🎉'];
const EMOJIS_FALLO = ['❌','💀','😭','⛔','💔','😵','🤦','🚫','💩','🤡','💥','😤'];

// 300 PREGUNTES TEST DGT
const PREGUNTES = {
  general: [
    {q:"Quina és la velocitat màxima en zona urbana?", emoji:"🚗", a:["30 km/h","50 km/h","60 km/h"],ok:1},
    {q:"Què indica una llum groga intermitent?", emoji:"🟡", a:["Aturada total","Precaució","Accelera"],ok:1},
    {q:"Distància de seguretat en sec:", emoji:"📏", a:["1 segon","2 segons","3 segons"],ok:1},
    {q:"Es pot avançar en línia contínua?", emoji:"🚫", a:["Sí","No, mai","Només motos"],ok:1},
    {q:"Taxa d'alcohol general:", emoji:"🍺", a:["0.5 g/l","0.3 g/l","0.8 g/l"],ok:0},
    {q:"Prioritat a la rotonda:", emoji:"🔄", a:["El que entra","El que circula dins","El més ràpid"],ok:1},
    {q:"Llums de creuament obligatòries:", emoji:"💡", a:["Sempre","Nit/túnels","Només pluja"],ok:1},
    {q:"Mòbil al volant?", emoji:"📱", a:["Permès mans lliures","Prohibit sempre","Només missatges"],ok:0},
    {q:"Distància mínima per avançar un ciclista:", emoji:"🚲", a:["1 metre","1.5 metres","2 metres"],ok:1},
    {q:"Quan usar el clàxon a ciutat?", emoji:"📢", a:["Saludar","Evitar accident","Mai"],ok:1},
    {q:"Què significa una senyal quadrada blava?", emoji:"🟦", a:["Prohibició","Obligació","Informació"],ok:2},
    {q:"Quan és obligatori usar l'armilla reflectant?", emoji:"🦺", a:["Sempre","En baixar del vehicle a via interurbana","Només de nit"],ok:1},
    {q:"Quina distància s'ha de mantenir a via interurbana?", emoji:"🚗", a:["1 segon","2 segons","3 segons"],ok:1},
    {q:"Es pot estacionar en un pas de vianants?", emoji:"🚷", a:["Sí","No, mai","Només 2 minuts"],ok:1},
    {q:"Què fer davant un vehicle d'emergència amb sirena?", emoji:"🚨", a:["Accelera","Facilitar el pas","Ignorar"],ok:1}
  ],
  senyals: [
    {q:"Senyal de STOP octogonal:", emoji:"🛑", a:["Cedeix el pas","Aturada obligatòria","Precaució"],ok:1},
    {q:"Triangle invertit és:", emoji:"🔺", a:["STOP","Cedeix el pas","No entrar"],ok:1},
    {q:"Cercle vermell amb línia:", emoji:"🚫", a:["Obligació","Prohibició","Fi prohibició"],ok:1}
  ],
  normes: [
    {q:"Taxa d'alcohol novells:", emoji:"🍺", a:["0.5 g/l","0.3 g/l","0.0 g/l"],ok:2},
    {q:"Cinturó obligatori:", emoji:"🔒", a:["Només davant","Només conductor","Tothom"],ok:2},
    {q:"Edat mínima carnet B:", emoji:"🪪", a:["16 anys","17 anys","18 anys"],ok:2}
  ],
  mecanica: [
    {q:"Presió baixa causa:", emoji:"🛞", a:["Major consum","Menor adherència","Ambdues"],ok:2},
    {q:"Líquid de frens baix:", emoji:"🛢️", a:["Desgast pastilles","Fuga","Ambdues poden ser"],ok:2}
  ]
};

// 80 CASOS REALS
const SITUACIONS = {
  clima: [
    {q:"Pluja intensa: què fas?", emoji:"🌧️", a:["Accelero per sortir","Redueixo velocitat i augmento distància","Freno en sec"],ok:1},
    {q:"Boira espessa:", emoji:"🌫️", a:["Llums llargues","Antiboira + curtes","Sense llums"],ok:1}
  ]
};

const COCHES = [
  {id:'c1',nom:'SEAT Ibiza',emoji:'🚗',precio:200,cv:90},
  {id:'c2',nom:'VW Golf GTI',emoji:'🛻',precio:800,cv:220},
  {id:'c6',nom:'Chiron Rosso Corsa',emoji:'🏎️',precio:5000,cv:1500}
];

const ACCESORIS = [
  {id:'a1',nom:'Turbo',emoji:'💨',precio:300,hp:50},
  {id:'a2',nom:'Pneumàtics Racing',emoji:'🛞',precio:200,hp:30}
];

const EMOJI_TIENDA = [
  {id:'e1',emoji:'🦄',nom:'Unicorn',precio:1000},
  {id:'e2',emoji:'👑',nom:'Corona',precio:800}
];

const TIPS = [
  {emoji:'🧠',txt:'Regla dels 2 segons: mantén distància amb el de davant'},
  {emoji:'👀',txt:'Mira 12 segons endavant, no només el cotxe de davant'}
];

let tipsData = [];
let tipActual = 0;

let estat = {
  coins: parseInt(localStorage.getItem('gd_coins')) || 0,
  coches: JSON.parse(localStorage.getItem('gd_coches')) || ['c1'],
  accesorios: JSON.parse(localStorage.getItem('gd_accesorios')) || [],
  emojis: JSON.parse(localStorage.getItem('gd_emojis')) || [],
  test: {
    general: {idx:0,aciertos:0,racha:0,puntuacion:0},
    senyals: {idx:0,aciertos:0,racha:0,puntuacion:0},
    normes: {idx:0,aciertos:0,racha:0,puntuacion:0},
    mecanica: {idx:0,aciertos:0,racha:0,puntuacion:0}
  },
  examen: {
    activa: false,
    preguntes: [],
    index: 0,
    aciertos: 0,
    timer: null,
    temps: 1800
  },
  sit: {
    clima: {idx:0,aciertos:0,puntuacion:0}
  }
};

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}

function init() {
  console.log("GasDrive V8.9 CAT carregat");
  actualizarCoins();
  carregarPregunta('general');
  carregarPregunta('senyals');
  carregarPregunta('normes');
  carregarPregunta('mecanica');
  carregarSituacio('clima');
  carregarTips();
  actualizarMensajeMotivacional();
}

function guardar() {
  localStorage.setItem('gd_coins', estat.coins);
  localStorage.setItem('gd_coches', JSON.stringify(estat.coches));
  localStorage.setItem('gd_accesorios', JSON.stringify(estat.accesorios));
  localStorage.setItem('gd_emojis', JSON.stringify(estat.emojis));
}

function actualizarCoins() {
  const el = document.getElementById('coins');
  if(el) el.textContent = `💰 ${estat.coins}`;
}

function canviarTab(tab) {
  document.querySelectorAll('.tab-content').forEach(t => t.classList.remove('active'));
  document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active'));
  document.getElementById('tab-' + tab).classList.add('active');
  event.target.closest('.nav-btn').classList.add('active');
  if(tab === 'garatge') carregarGarage();
  if(tab === 'botiga') carregarBotiga();
  if(tab === 'tips') carregarTips();
  if(tab === 'test') carregarPregunta('general');
  if(tab === 'casos') carregarSituacio('clima');
}

function canviarSubTab(tab, subtab) {
  const contenedor = document.getElementById('tab-' + tab);
  contenedor.querySelectorAll('.sub-tab-btn').forEach(b => b.classList.remove('active'));
  contenedor.querySelectorAll('.sub-content').forEach(c => c.classList.remove('active'));
  event.target.classList.add('active');
  document.getElementById(`${tab === 'test'? 'test' : 'sit'}-${subtab}`).classList.add('active');
  if(tab === 'test') carregarPregunta(subtab);
  if(tab === 'sit') carregarSituacio(subtab);
}

function mostrarEmoji(acierto, elemento) {
  const lista = acierto? EMOJIS_ACIERTO : EMOJIS_FALLO;
  const emoji = lista[Math.floor(Math.random() * lista.length)];
  const span = document.createElement('span');
  span.textContent = emoji;
  span.style.cssText = 'position:absolute;right:12px;top:50%;transform:translateY(-50%);font-size:32px;animation:bounceIn 0.4s;pointer-events:none;z-index:999;';
  elemento.style.position = 'relative';
  elemento.appendChild(span);
  setTimeout(() => span.remove(), 600);
  if(navigator.vibrate) navigator.vibrate(acierto? [30,20,30] : 100);
}

function carregarPregunta(cat) {
  const s = estat.test[cat];
  const preguntes = PREGUNTES[cat];
  if(!preguntes || preguntes.length === 0) return;
  const p = preguntes[s.idx % preguntes.length];

  const emoji = p.emoji || '📝';
  document.getElementById(`test-${cat}-pregunta`).innerHTML = `${emoji} ${p.q}`;
  document.getElementById(`test-${cat}-aciertos`).textContent = s.aciertos;
  document.getElementById(`test-${cat}-racha`).textContent = s.racha;
  document.getElementById(`test-${cat}-score`).textContent = s.puntuacion;
  document.getElementById(`test-${cat}-progress`).style.width = `${((s.idx % preguntes.length)/preguntes.length)*100}%`;

  const cont = document.getElementById(`test-${cat}-opciones`);
  cont.innerHTML = '';
  document.getElementById(`test-${cat}-feedback`).textContent = '';
  document.getElementById(`btn-sig-test-${cat}`).disabled = true;

  p.a.forEach((txt, i) => {
    const div = document.createElement('div');
    div.className = 'opcio';
    div.textContent = txt;
    div.onclick = function() { respondreTest(cat, i, this); };
    cont.appendChild(div);
  });
}

function respondreTest(cat, idx, el) {
  const s = estat.test[cat];
  const preguntes = PREGUNTES[cat];
  const p = preguntes[s.idx % preguntes.length];
  if(el.classList.contains('bloqueada')) return;

  document.querySelectorAll(`#test-${cat}-opciones.opcio`).forEach(o => o.classList.add('bloqueada'));
  const correcte = idx === p.ok;

  if(correcte) {
    el.classList.add('correcta');
    s.aciertos++;
    s.racha++;
    s.puntuacion += 10 + (s.racha * 2);
    estat.coins += 5;
    document.getElementById(`test-${cat}-feedback`).className = 'feedback acierto';
    document.getElementById(`test-${cat}-feedback`).textContent = `✅ CORRECTE! +${10+(s.racha*2)} pts`;
    mostrarEmoji(true, el);
  } else {
    el.classList.add('incorrecta');
    document.querySelectorAll(`#test-${cat}-opciones.opcio`)[p.ok].classList.add('correcta');
    document.getElementById(`test-${cat}-feedback`).className = 'feedback fallo';
    document.getElementById(`test-${cat}-feedback`).textContent = '❌ FALLO';
    mostrarEmoji(false, el);
    s.racha = 0;
  }
  document.getElementById(`btn-sig-test-${cat}`).disabled = false;
  actualizarCoins();
  guardar();
}

function seguentTest(cat) {
  estat.test[cat].idx++;
  carregarPregunta(cat);
}

function carregarSituacio(cat) {
  const s = estat.sit[cat];
  const casos = SITUACIONS[cat];
  if(!casos || casos.length === 0) return;
  const p = casos[s.idx % casos.length];

  document.getElementById(`sit-${cat}-pregunta`).innerHTML = `${p.emoji || '🚦'} ${p.q}`;
  document.getElementById(`sit-${cat}-aciertos`).textContent = s.aciertos;
  document.getElementById(`sit-${cat}-score`).textContent = s.puntuacion;
  document.getElementById(`sit-${cat}-progress`).style.width = `${((s.idx % casos.length)/casos.length)*100}%`;

  const cont = document.getElementById(`sit-${cat}-opciones`);
  cont.innerHTML = '';
  document.getElementById(`sit-${cat}-feedback`).textContent = '';
  document.getElementById(`btn-sig-sit-${cat}`).disabled = true;

  p.a.forEach((txt, i) => {
    const div = document.createElement('div');
    div.className = 'opcio';
    div.textContent = txt;
    div.onclick = function() { respondreSituacio(cat, i, this); };
    cont.appendChild(div);
  });
}

function respondreSituacio(cat, idx, el) {
  const s = estat.sit[cat];
  const casos = SITUACIONS[cat];
  const p = casos[s.idx % casos.length];
  if(el.classList.contains('bloqueada')) return;

  document.querySelectorAll(`#sit-${cat}-opciones.opcio`).forEach(o => o.classList.add('bloqueada'));
  const correcte = idx === p.ok;

  if(correcte) {
    el.classList.add('correcta');
    s.aciertos++;
    s.puntuacion += 15;
    estat.coins += 10;
    document.getElementById(`sit-${cat}-feedback`).className = 'feedback acierto';
    document.getElementById(`sit-${cat}-feedback`).textContent = `✅ CORRECTE! +15 pts`;
    mostrarEmoji(true, el);
  } else {
    el.classList.add('incorrecta');
    document.querySelectorAll(`#sit-${cat}-opciones.opcio`)[p.ok].classList.add('correcta');
    document.getElementById(`sit-${cat}-feedback`).className = 'feedback fallo';
    document.getElementById(`sit-${cat}-feedback`).textContent = '❌ FALLO';
    mostrarEmoji(false, el);
  }
  document.getElementById(`btn-sig-sit-${cat}`).disabled = false;
  actualizarCoins();
  guardar();
}

function seguentSituacio(cat) {
  estat.sit[cat].idx++;
  carregarSituacio(cat);
}

function iniciarExamen() {
  const totes = [
   ...PREGUNTES.general,
   ...PREGUNTES.senyals,
   ...PREGUNTES.normes,
   ...PREGUNTES.mecanica,
   ...SITUACIONS.clima
  ];
  if(totes.length < 30) {
    alert('Falten preguntes. Necessites 30 mínim.');
    return;
  }
  estat.examen.preguntes = totes.sort(() => 0.5 - Math.random()).slice(0, 30);
  estat.examen.activa = true;
  estat.examen.index = 0;
  estat.examen.aciertos = 0;
  document.getElementById('btn-iniciar-examen').style.display = 'none';
  document.getElementById('btn-sig-examen').style.display = 'block';
  iniciarTimerExamen();
  carregarPreguntaExamen();
}

function iniciarTimerExamen() {
  clearInterval(estat.examen.timer);
  estat.examen.temps = 1800;
  estat.examen.timer = setInterval(() => {
    estat.examen.temps--;
    const min = Math.floor(estat.examen.temps / 60);
    const seg = estat.examen.temps % 60;
    document.getElementById('examen-timer').textContent = `${min.toString().padStart(2,'0')}:${seg.toString().padStart(2,'0')}`;
    if(estat.examen.temps <= 0) finalitzarExamen();
  }, 1000);
}

function carregarPreguntaExamen() {
  if(estat.examen.index >= 30) return finalitzarExamen();
  const p = estat.examen.preguntes[estat.examen.index];
  document.getElementById('examen-num').textContent = estat.examen.index + 1;
  document.getElementById('examen-aciertos').textContent = estat.examen.aciertos;
  document.getElementById('examen-progress').style.width = `${(estat.examen.index/30)*100}%`;
  document.getElementById('examen-pregunta').innerHTML = `${p.emoji || '📝'} ${p.q}`;

  const cont = document.getElementById('examen-opciones');
  cont.innerHTML = '';
  document.getElementById('btn-sig-examen').disabled = true;

  p.a.forEach((txt, i) => {
    const div = document.createElement('div');
    div.className = 'opcio';
    div.textContent = txt;
    div.onclick = function() { respondreExamen(i, this); };
    cont.appendChild(div);
  });
}

function respondreExamen(idx, el) {
  if(el.classList.contains('bloqueada')) return;
  const p = estat.examen.preguntes[estat.examen.index];
  document.querySelectorAll('#examen-opciones.opcio').forEach(o => o.classList.add('bloqueada'));
  const correcte = idx === p.ok;
  if(correcte) {
    el.classList.add('correcta');
    estat.examen.aciertos++;
    estat.coins += 20;
    mostrarEmoji(true, el);
  } else {
    el.classList.add('incorrecta');
    document.querySelectorAll('#examen-opciones.opcio')[p.ok].classList.add('correcta');
    mostrarEmoji(false, el);
  }
  document.getElementById('btn-sig-examen').disabled = false;
  document.getElementById('examen-aciertos').textContent = estat.examen.aciertos;
  actualizarCoins();
  guardar();
}

function seguentPreguntaExamen() {
  estat.examen.index++;
  if(estat.examen.index >= 30) {
    finalitzarExamen();
  } else {
    carregarPreguntaExamen();
  }
}

function finalitzarExamen() {
  clearInterval(estat.examen.timer);
  estat.examen.activa = false;
  const nota = estat.examen.aciertos;
  const aprovat = nota >= 27;
  const res = document.getElementById('examen-resultat');
  res.style.display = 'block';
  if(aprovat) {
    res.innerHTML = `<h2 style="color:#2ecc71">✅ APROVAT!</h2><p style="font-size:24px">${nota}/30</p><p>Has guanyat +${nota*20} coins</p><button class="btn" onclick="reiniciarExamen()">Fer un altre examen</button>`;
    estat.coins += nota * 20;
  } else {
    res.innerHTML = `<h2 style="color:#e74c3c">❌ SUSPÈS</h2><p style="font-size:24px">${nota}/30</p><p>Necessites 27 encerts mínim</p><button class="btn" onclick="reiniciarExamen()">Tornar a provar</button>`;
  }
  actualizarCoins();
  guardar();
}

function reiniciarExamen() {
  document.getElementById('examen-resultat').style.display = 'none';
  document.getElementById('btn-iniciar-examen').style.display = 'block';
  document.getElementById('btn-sig-examen').style.display = 'none';
  document.getElementById('examen-pregunta').textContent = "Prem Inicia Examen";
  document.getElementById('examen-opciones').innerHTML = '';
  document.getElementById('examen-num').textContent = '0';
  document.getElementById('examen-aciertos').textContent = '0';
  document.getElementById('examen-progress').style.width = '0%';
  document.getElementById('examen-timer').textContent = '30:00';
}

function carregarGarage() {
  const cont = document.getElementById('garage-lista');
  cont.innerHTML = '';
  let hpTotal = 90;
  estat.accesorios.forEach(id => {
    const acc = ACCESORIS.find(a => a.id === id);
    if(acc) hpTotal += acc.hp;
  });
  document.getElementById('garage-score').textContent = `🏎️ ${hpTotal} CV`;
  COCHES.forEach(coche => {
    const desbloquejat = estat.coches.includes(coche.id);
    const div = document.createElement('div');
    div.className = 'garage-car' + (desbloquejat? '' : ' locked');
    div.setAttribute('data-id', coche.id);
    div.innerHTML = `
      <div style="font-size:40px">${coche.emoji}</div>
      <div>${coche.nom}</div>
      <div style="color:#C8102E">${coche.cv} CV</div>
      ${!desbloquejat? `<button class="btn-buy" onclick="comprarCoche('${coche.id}')">Comprar ${coche.precio}💰</button>` : '<div style="color:#2ecc71">✓ Propietari</div>'}
    `;
    cont.appendChild(div);
  });
}

function comprarCoche(id) {
  const coche = COCHES.find(c => c.id === id);
  if(!coche) return;
  if(estat.coins < coche.precio) {
    alert('No tens suficients coins');
    return;
  }
  estat.coins -= coche.precio;
  estat.coches.push(id);
  guardar();
  actualizarCoins();
  carregarGarage();
}

function carregarBotiga() {
  const cont = document.getElementById('emoji-botiga');
  cont.innerHTML = '';
  ACCESORIS.forEach(acc => {
    const comprat = estat.accesorios.includes(acc.id);
    const div = document.createElement('div');
    div.className = 'emoji-item' + (comprat? ' locked' : '');
    div.innerHTML = `
      <div style="font-size:40px">${acc.emoji}</div>
      <div>${acc.nom}</div>
      <div style="color:#C8102E">+${acc.hp} CV</div>
      ${!comprat? `<button class="btn-buy" onclick="comprarAccesorio('${acc.id}')">Comprar ${acc.precio}💰</button>` : '<div style="color:#2ecc71">✓ Comprat</div>'}
    `;
    cont.appendChild(div);
  });
  EMOJI_TIENDA.forEach(emoji => {
    const comprat = estat.emojis.includes(emoji.id);
    const div = document.createElement('div');
    div.className = 'emoji-item' + (comprat? ' locked' : '');
    div.innerHTML = `
      <div style="font-size:40px">${emoji.emoji}</div>
      <div>${emoji.nom}</div>
      <div style="color:#C8102E">Cosmètic</div>
      ${!comprat? `<button class="btn-buy" onclick="comprarEmoji('${emoji.id}')">Comprar ${emoji.precio}💰</button>` : '<div style="color:#2ecc71">✓ Comprat</div>'}
    `;
    cont.appendChild(div);
  });
}

function comprarAccesorio(id) {
  const acc = ACCESORIS.find(a => a.id === id);
  if(!acc) return;
  if(estat.coins < acc.precio) {
    alert('No tens suficients coins');
    return;
  }
  estat.coins -= acc.precio;
  estat.accesorios.push(id);
  guardar();
  actualizarCoins();
  carregarBotiga();
}

function comprarEmoji(id) {
  const emoji = EMOJI_TIENDA.find(e => e.id === id);
  if(!emoji) return;
  if(estat.coins < emoji.precio) {
    alert('No tens suficients coins');
    return;
  }
  estat.coins -= emoji.precio;
  estat.emojis.push(id);
  guardar();
  actualizarCoins();
  carregarBotiga();
}

function carregarTips() {
  tipsData = TIPS;
  tipActual = 0;
  mostrarTip();
}

function mostrarTip() {
  if (tipsData.length === 0) return;
  const tip = tipsData[tipActual];
  document.getElementById('tip-content').innerHTML = `
    <div class="tip-emoji">${tip.emoji}</div>
    <div class="tip-text">${tip.txt}</div>
  `;
  document.getElementById('tip-counter').textContent = `${tipActual + 1} / ${tipsData.length}`;
}

function seguentTip() {
  tipActual = (tipActual + 1) % tipsData.length;
  mostrarTip();
}

function anteriorTip() {
  tipActual = (tipActual - 1 + tipsData.length) % tipsData.length;
  mostrarTip();
}

function actualizarMensajeMotivacional() {
  const missatges = [
    "Vas per bon camí 💪",
    "Cada fallo et fa més fort 🔥",
    "L'examen DGT és teu 🚗",
    "No paris ara 💎",
    "Concentra't i aprovaràs 👑"
  ];
  const msg = missatges[Math.floor(Math.random() * missatges.length)];
  const el = document.getElementById('motivacio');
  if(el) el.textContent = msg;
}

// REGISTRE SERVICE WORKER
if('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('./service-worker.js')
  .then(reg => console.log('SW registrat'))
  .catch(err => console.log('SW error:', err));
  });
}