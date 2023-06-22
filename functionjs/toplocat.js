import data from "../data/toplocat.json" assert { type: "json" };

const qrlocat = document.getElementById("qrcode");
const qrbtn = document.getElementById("modal-toggle");


function topcreat(icon, hindi, english, map,id) {
  const creat = document.getElementById("maincon");
  creat.innerHTML += `<section   class="mainsection">
  <div class="iconname itext gm">${icon}</div>
  <div class="hindi hindiname">${hindi}</div>
  <div class="english engname ">${english}</div>
  <a href="${map}" class="map glow-on-hover gm" target="_blank" rel="noopener noreferrer"><img src="icons8-google-maps-old.svg" alt="google-maps"><div class="gmtext">
  Google Map
  </div></a>

</section>`;

}



data.forEach((e) => {
  let lowerStr = e.english.toLowerCase();
  topcreat(e.icon, e.hindi, lowerStr, e.map,e.id);
  
  
});

