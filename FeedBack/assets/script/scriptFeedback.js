let svgs = document.querySelectorAll("#contenitoreStelle svg");
let clicked = false;

for (let i = 0; i < svgs.length; i++) {
  svgs[i].addEventListener('mouseover', function() {
    if (!clicked) {
      for (let j = 0; j <= i; j++) {
        svgs[j].style.fill = '#00ffff';
      }
      }
  });
  svgs[i].addEventListener('mouseout', function() {
    if (!clicked) {
      for (let j = 0; j <= i; j++) {
        svgs[j].style.fill = 'initial';
      }
    }
  });
  svgs[i].addEventListener('click', function() {
    if(clicked){
      clicked=false
      svgs.forEach(element => {
        element.style.fill ="#000000"
      });
  }
    clicked = true;
    for (let j = 0; j <= i; j++) {
      svgs[j].style.fill = '#00ffff';
    }
  });
}