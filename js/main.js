const colores = document.querySelectorAll('.content-color');
const hoverLeft = document.getElementById('div--false-left');
const hoverRight = document.getElementById('div--false-right');
const divHover = document.getElementById('div-falses');
const paredizq = document.getElementById('paredLeft');
const paredder = document.getElementById('paredRight');
const svg = document.getElementById('div-svg');
const path = document.getElementById('path');
const svgLeft = document.getElementById('svg-left');
const svgRight = document.getElementById('svg-right');
const paths = document.getElementById('path2');
const path3 = document.getElementById('path3');
const path4 = document.getElementById('path4');
const path5 = document.getElementById('path5');
const path6 = document.getElementById('path6');


var pared = '';
var svgP = '';
var svgP3 = '';
var svgP4 = '';
var svgP5 = '';
var svgP6 = '';



colores.forEach(function(item){
  item.addEventListener('click', function(){
    color = this.dataset.color;
    console.log(color);
    //pared.style.background = color;
    svgP.style.fill = color;
    svgP3.style.fill = color;
    svgP4.style.fill = color;
    svgP5.style.fill = color;
    svgP6.style.fill = color;
  })
})

  divHover.addEventListener('click', function(evt) {
    var target = evt.target;
    console.log(target);
    if (target == hoverLeft) {
      pared = paredizq;

      console.log(paredizq);
      return;
    }
    pared = paredder;

  });


for (var i = 0; i < colores.length; i++) {
  colores[i].addEventListener("click", function() {
  var current = document.getElementsByClassName("active");
  current[0].className = current[0].className.replace(" active", "");
  this.className += " active";
  });
}

svg.addEventListener('click', function(evt){
    var target = evt.target;
    console.log(target);
    if (target == path) {
      pared = paredder;
      svgP = path;
      svgP3 = '';
      svgP4 = '';
      return;
    }
    pared = paredizq;
    svgP = paths;
    svgP3 = path3;
    svgP4 = path4;
    svgP5 = path5;
    svgP6 = path6;
})
