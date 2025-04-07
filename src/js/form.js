'use strict';

function show_alert() {
    const text = document.getElementById("text").value;
    const email = document.getElementById("email").value;
    const number = document.getElementById("number").value;
    
    const select = document.querySelector("select").value;

    if (text != '' && email != '' && number != '' && email.includes("@") && email.includes(".") &&
        select == 'elogio' || select == 'reclamacao' || select == 'solicitacao') {
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

const termosCondicoes = document.getElementById("checkbox-termos");
const button = document.querySelector(".button");
button.disabled = true;

termosCondicoes.addEventListener("change", () => {
    if (termosCondicoes.checked) {
        button.style.background = "blue";
        button.style.cursor = "pointer";
        button.disabled = false;

        button.addEventListener("mouseover", () => {
            button.style.transform = "scale(1.05)";
        });

        button.addEventListener("mouseout", () => {
            button.style.transform = "scale(1.00)";
        });
    }
    else {
        button.style.background = "grey";
        button.style.cursor = "default";
        button.disabled = true;
        button.addEventListener("mouseover", () => {
            button.style.transform = "scale(1.00)";
        });

        button.addEventListener("mouseout", () => {
            button.style.transform = "scale(1.00)";
        });
    }
});

function makeButtonUsable () {
    if (termosCondicoes.checked)
        show_alert();
}