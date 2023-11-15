window.onload = function() {
  document.getElementById("termsConditions").checked = false;
  }

  document.getElementById('accept-conditions').addEventListener('click', function(event) {
    var checkBox = document.getElementById('termsConditions');
    if (!checkBox.checked) {
      event.preventDefault();
      alert('Devi accettare i termini e le condizioni prima di procedere.');
    }
  });

  
  