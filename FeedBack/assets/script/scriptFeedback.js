stelle = document.querySelectorAll("#contenitoreStelle svg")

let svgs = document.querySelectorAll("#contenitoreStelle svg");

for (let i = 0; i < svgs.length; i++) {
  svgs[i].addEventListener('mouseover', function() {
    for (let j = 0; j <= i; j++) {
      svgs[j].style.fill = 'red';
    }
  });

  svgs[i].addEventListener('mouseout', function() {
    for (let j = 0; j <= i; j++) {
      svgs[j].style.fill = 'initial';
    }
  });
}