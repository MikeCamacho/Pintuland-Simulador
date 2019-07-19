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


var pared = '';
var svgP = '';
colores.forEach(function(item){
  item.addEventListener('click', function(){
    color = this.dataset.color;
    console.log(color);
    pared.style.background = color;
    svgP.style.fill = color;
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

svg.addEventListener('click', function(evt){
    var target = evt.target;
    console.log(target);
    if (target == path) {
      console.log("mike");
      pared = paredder;
      svgP = path;
      return;
    }
    pared = paredizq;
    svgP = paths;
})




for (var i = 0; i < colores.length; i++) {
  colores[i].addEventListener("click", function() {
  var current = document.getElementsByClassName("active");
  current[0].className = current[0].className.replace(" active", "");
  this.className += " active";
  });
}

hoverLeft.addEventListener("mouseover", function( event ) {
  paredLeft.style.background = "rgba(255, 255, 255, 0.81)";
}, false);

hoverLeft.addEventListener("mouseout", function( event ) {
  pared.style.background = color;
}, false);

hoverRight.addEventListener("mouseover", function( event ) {
  paredRight.style.background = "rgba(255, 255, 255, 0.81)";
}, false);

hoverRight.addEventListener("mouseout", function( event ) {
  pared.style.background = color;
}, false);
