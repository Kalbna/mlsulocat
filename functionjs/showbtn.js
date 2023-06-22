import data from '../data/alllocat.json' assert{type:'json'};
import topdata from '../data/toplocat.json' assert{type:'json'};
const buttonw = document.getElementById("buttonshow");



function allcreate(icon,hindi,english,map,id){
  const creat  = document.getElementById("maincon");
  creat.innerHTML +=  `<section id="${id}"  class="mainsection">
  <div class="iconname gm itext">${icon}</div>
  <div class="hindi hindiname">${hindi}</div>
  <div class="english engname">${english}</div>
  <a href="${map}" class="map glow-on-hover gm" target="_blank" rel="noopener noreferrer"><img src="icons8-google-maps-old.svg" alt="google-maps"><div class="gmtext">
  Google Map
  </div></a>
</section>`;
};

let  loader = () => {
  data.forEach((e) =>{
    let lowerStr = e.english.toLowerCase();
    allcreate(e.icon,e.hindi,lowerStr,e.maplocation,e.id)
  })
}

buttonw.addEventListener("click",()=>{
  document.getElementById("maincon").innerHTML = ``;
  loader();
  config();
  configg();
});


function config(){
  if(buttonw.innerText === 'Show Less'){
    document.getElementById("maincon").innerHTML = ``;
  topdata.forEach((e)=>{
    allcreate(e.icon,e.hindi,e.english,e.maplocation)
  })
  }
  else {
    document.getElementById("maincon").innerHTML = ``;
  loader();
  }
};

function configg(){
  if(buttonw.innerText === 'Show More'){
    buttonw.innerText = `Show Less`;
  }
  else{
    buttonw.innerText = `Show More`;
  }
};

export {loader};