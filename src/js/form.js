'use strict';

const button = document.querySelector(".button");

button.addEventListener("mouseover", (e) => {
    button.style.transform = "scale(1.05)";
    button.style.border = "1px solid black;";
});

button.addEventListener("mouseout", (e) => {
    button.style.transform = "scale(1.00)";
    button.style.border = "none;";
});

function show_alert() {
    const text = document.getElementById("text").value;
    const email = document.getElementById("email").value;
    const number = document.getElementById("number").value;

    if (text != '' && email != '' && number != '') {
        Swal.fire({
            position: "center",
            icon: "success",
            title: "Mensagem enviada",
            showConfirmButton: false,
            timer: 1500
          });
    
    }
    else {
        Swal.fire({
            icon: "error",
            title: "Erro",
            text: "Preencha todas as informações",
          });
    }
}