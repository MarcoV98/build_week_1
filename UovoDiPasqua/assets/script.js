let clicked=false;

function moneta(){
  monetaImg = document.getElementById("moneta")
  if(clicked){
    monetaImg.style.opacity = 0
    return
  }

  clicked = true;
  monetaImg.style.opacity = 1

  testo = document.getElementById("contenitoreTesto")
  testo.style.opacity = 1;

}


cCubo = document.getElementById("cubo")
cCubo.addEventListener("click", function () {
  moneta(),

  setTimeout(() => {
    moneta()
  }, 1500);
} )