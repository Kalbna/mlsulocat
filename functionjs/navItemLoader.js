import catdata from '../data/alllocat.json' assert{type:'json'};
import {loader}  from './showbtn.js';
const admin = document.getElementById("my-dropdown-id");
const adminblock = document.getElementById("admindown");
const depart = document.getElementById("blog");
const departblock = document.getElementById("departdown");

var capWord;
function adminloader(id,english) {
  
  admin.innerHTML += `<li ><a class="adbtn" href="#${id}">${english}</a></li>
  <li class="separator"></li>`
};
function departloader(id,english) {
  depart.innerHTML += `<li ><a class="debtn" href="#${id}">${english}</a></li>
  <li class="separator"></li>`
};

function capitalizeFirst(str) {
  let word = str.toUpperCase();
  console.log(word);
  return capWord = word.charAt(0).toUpperCase() + word.slice(1);
}


adminblock.addEventListener("click",() =>{
  admin.innerHTML =``;
  catdata.forEach((e) =>{
    if(e.type === "Administrative"){
      capitalizeFirst(e.english)
      adminloader(e.id,capWord);
    }
  });
  });

departblock.addEventListener("click",() =>{
  depart.innerHTML =``;
  catdata.forEach((e) =>{
    if(e.type === "Department"){
      capitalizeFirst(e.english)
      departloader(e.id,capWord);
    }
  });
});

const adbtn = document.getElementById("administrative");
const depbtn = document.getElementById("departidbtn");
adbtn.addEventListener("click",(adbtn) =>{
  let adele = adbtn.target;
  if (adbtn.target.className === "adbtn" ) {
    loader();
  }
})
depbtn.addEventListener("click",(depbtn) =>{
  let depele = depbtn.target;
  if (depbtn.target.className === "debtn" ) {
    loader();
    
  }
})

