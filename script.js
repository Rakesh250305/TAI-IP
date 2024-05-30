let cube = document.querySelector(".slide-image");
let Nextbtn = document.getElementById("next");
let Prevbtn = document.getElementById("prev");

let pos = 0;

Nextbtn.addEventListener("click", function(){
  pos -= 90;
  cube.style.transform = `rotateY(${pos}deg)`;
});
Prevbtn.addEventListener("click", function() {
  pos += 90;
  cube.style.transform = `rotateY(${pos}deg)`;
});