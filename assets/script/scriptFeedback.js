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

function mostraCommento() {
  let commento = document.getElementById("commento").value.trim()
  let commentoOutput = document.getElementById("commentoOutput")

  if (commento === "") {
    let avviso = document.createElement("p")
    avviso.id = "feedbackMessage"
    avviso.textContent = "Please enter a comment before submitting."
    avviso.style.color = "red"
    commentoOutput.appendChild(avviso)
    return;
  }

  let thankyouFeedback = document.createElement("div")
  thankyouFeedback.id = "thankyouFeedack"

  let commentoElement = document.createElement("p")
  commentoElement.innerHTML = '<p id="rateUs">Your comment:</p><p style="font-style: italic;">' + commento + '</p>'

  thankyouFeedback.innerHTML = '<h3>Thank you for your feedback!</h3>'
  thankyouFeedback.appendChild(commentoElement)

  commentoOutput.innerHTML = " "
  commentoOutput.appendChild(thankyouFeedback)
  document.getElementById("commento").value = ""
}