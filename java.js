let acessar = document.getElementById("acessar");

function newPage(){
    window.location.href = "agendamento/index2.html";
    alert("Acesso permitido!");
    
   
}

acessar.onclick = newPage;