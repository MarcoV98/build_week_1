let clicked=false;

function moneta(){
  monetaImg = document.getElementById("moneta")
  if(clicked){
    monetaImg.style.display="none"
    return
  }
  sound();

  clicked = true;
  monetaImg.style.display = "inline"

  testo = document.getElementById("contenitoreTesto")
  testo.style.display="inline"

}

function sound(){
  let snd = new Audio('images/Mario_Coin_Sound_-_Sound_Effect_HD.mp3')
  snd.play() 
}


cCubo = document.getElementById("cubo")
cCubo.addEventListener("click", function () {
  moneta(),

  setTimeout(() => {
    moneta()
  }, 1500);
} )