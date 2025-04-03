'use strict';

const xl = document.querySelector(".xl");
const xls = document.querySelector(".xls");
const storm = document.querySelector(".storm");
const allCheckboxes = document.querySelectorAll(".checkbox");

const button = document.querySelector(".botao_comparador");

let max = 2;

function doTheChecking(e) {
    if (!max && e.checked) {
        alert("error")
        e.checked = false;
    }
    else e.checked ? max-- : max++;
}

allCheckboxes.forEach((val) => {
    val.addEventListener("change", () => {
        doTheChecking(val);
    })
});

button.addEventListener("click", () => {
    if (!max) {
        alert("comparador")
    }
    else {
        alert("msg de erro")
    }
})