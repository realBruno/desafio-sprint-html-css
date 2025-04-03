'use strict';

const xl = document.querySelector(".xl");
const xls = document.querySelector(".xls");
const storm = document.querySelector(".storm");

const allCheckboxes = document.querySelectorAll(".checkbox");

let max = 2;

function moreThanTwo() {
    alert("ERROR MESSAGE")
}

function doTheChecking(e) {
    if (!max && e.checked) {
        moreThanTwo();
        e.checked = false;
    }
    else e.checked ? max-- : max++;
}

allCheckboxes.forEach((val) => {
    val.addEventListener("change", () => {
        doTheChecking(val);
    })
});