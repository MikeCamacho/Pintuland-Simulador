const color = document.querySelectorAll('.content-color');
const hoverLeft = document.getElementById('div--false-left');
const hoverRight = document.getElementById('div--false-right');
const divHover = document.getElementById('div-falses');


  divHover.addEventListener('click', function(evt) {
    var target = evt.target;
    if (target == hoverLeft) {

      console.log('mikeizq');
      color.forEach(function(mike){
        mike.addEventListener('click', function(){
          const hexaColor = this.dataset.color;
          const pared = document.getElementById('paredLeft')
          pared.style.background = hexaColor;
        }, false)
      })
    }
    else if (target == hoverRight){
      var target = hoverRight;
      console.log('mikederecha');
      color.forEach(function(mike1){
        mike1.addEventListener('click', function(){
          const hexaColor = this.dataset.color;
          const pared2 = document.getElementById('paredRight')
          pared2.style.background = hexaColor;
        },false)
      },false)
    }
  });




for (var i = 0; i < color.length; i++) {
  color[i].addEventListener("click", function() {
  var current = document.getElementsByClassName("active");
  current[0].className = current[0].className.replace(" active", "");
  this.className += " active";
  });
}

hoverLeft.addEventListener("mouseover", function( event ) {
  paredLeft.style.background = "rgba(255, 255, 255, 0.81)";
}, false);

hoverLeft.addEventListener("mouseout", function( event ) {
  paredLeft.style.background = "";
}, false);

hoverRight.addEventListener("mouseover", function( event ) {
  paredRight.style.background = "rgba(255, 255, 255, 0.81)";
}, false);

hoverRight.addEventListener("mouseout", function( event ) {
  paredRight.style.background = "";
}, false);
