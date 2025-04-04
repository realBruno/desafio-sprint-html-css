'use strict';

const xl = document.querySelector(".xl");
const xls = document.querySelector(".xls");
const storm = document.querySelector(".storm");
const allCheckboxes = document.querySelectorAll(".checkbox");

const button = document.querySelector(".botao_comparador");

let max = 2;

function doTheChecking(e) {
    if (!max && e.checked) {
        Swal.fire({
            icon: "error",
            title: "Selecione dois veículos",
        });
        e.checked = false;
    }
    else e.checked ? max-- : max++;
}

allCheckboxes.forEach((val) => {
    val.addEventListener("change", () => {
        doTheChecking(val);
    })
});

const dialog = document.querySelector("dialog");

button.addEventListener("click", () => {
    if (!max) {
        if (xl.checked && xls.checked) {
            changeBackground();
            dialog.showModal();
            dialog.innerHTML = `
            <table class="tabela-dialog">
                <tr>
                    <th></th>
                    <th class="image-container"><img class="car car1" src="../../public/images/xl_cabine.jpg" alt=""></th>
                    <th class="image-container"><img class="car car2" src="../../public/images/xls_diesel.jpg" alt=""></th>
                </tr>
    
                <tr class="par modelo">
                    <td>Modelo</td>
                    <td>XL Cabine Diesel 4x4 2022</td>
                    <td>XLS 2.2 Diesel 4X4 AT 2022</td>
                </tr>

                <tr class="impar">
                    <td>Altura da caçamba (mm)</td>
                    <td>511</td>
                    <td>511</td>
                </tr>

                <tr class="par">
                    <td>Altura do veículo (mm)</td>
                    <td>1821</td>
                    <td>1821</td>
                </tr>

                <tr class="impar">
                    <td>Altura livre do solo (mm)</td>
                    <td>232</td>
                    <td>232</td>
                </tr>

                <tr class="par">
                    <td>Capacidade de carga (kg)</td>
                    <td>1234</td>
                    <td>1076</td>
                </tr>

                <tr class="impar">
                    <td>Motor</td>
                    <td>2.2</td>
                    <td>2.2</td>
                </tr>

                <tr class="par">
                    <td>Potência (CV)</td>
                    <td>160</td>
                    <td>160</td>
                </tr>

                <tr class="impar">
                    <td>Volume da caçamba (L)</td>
                    <td>1420</td>
                    <td>1180</td>
                </tr>

                <tr class="par">
                    <td>Roda</td>
                    <td>Aço Estampado 16</td>
                    <td>Aço Estampado 16</td>
                </tr>

                <tr class="impar">
                    <td>Preço</td>
                    <td>R$ 153.376,00</td>
                    <td>R$ 155.890,00</td>
                </tr>
            </table>
            <div class="container-fechar"><button class="fechar" onclick="hide()">Fechar</button></div>`
        }
        else if (xl.checked && storm.checked) {
            changeBackground();
            dialog.showModal();
            dialog.innerHTML = `
            <table class="tabela-dialog">
                <tr>
                    <th></th>
                    <th class="image-container"><img class="car car1" src="../../public/images/xl_cabine.jpg" alt=""></th>
                    <th class="image-container"><img class="car car2" src="../../public/images/storm.jpg" alt=""></th>
                </tr>
    
                <tr class="par modelo">
                    <td>Modelo</td>
                    <td>XL Cabine Diesel 4x4 2022</td>
                    <td>Storm 3.2 Diesel 4X4 AT 2022</td>
                </tr>

                <tr class="impar">
                    <td>Altura da caçamba (mm)</td>
                    <td>511</td>
                    <td>511</td>
                </tr>

                <tr class="par">
                    <td>Altura do veículo (mm)</td>
                    <td>1821</td>
                    <td>1821</td>
                </tr>

                <tr class="impar">
                    <td>Altura livre do solo (mm)</td>
                    <td>232</td>
                    <td>232</td>
                </tr>

                <tr class="par">
                    <td>Capacidade de carga (kg)</td>
                    <td>1234</td>
                    <td>1040</td>
                </tr>

                <tr class="impar">
                    <td>Motor</td>
                    <td>2.2</td>
                    <td>3.2</td>
                </tr>

                <tr class="par">
                    <td>Potência (CV)</td>
                    <td>160</td>
                    <td>200</td>
                </tr>

                <tr class="impar">
                    <td>Volume da caçamba (L)</td>
                    <td>1420</td>
                    <td>1180</td>
                </tr>

                <tr class="par">
                    <td>Roda</td>
                    <td>Aço Estampado 16</td>
                    <td>Liga Leve 17</td>
                </tr>

                <tr class="impar">
                    <td>Preço</td>
                    <td>R$ 153.376,00</td>
                    <td>R$ 169.740,00</td>
                </tr>
            </table>
            <div class="container-fechar"><button class="fechar" onclick="hide()">Fechar</button></div>`
        }
        else if (xls.checked && storm.checked) {
            changeBackground();
            dialog.showModal();
            dialog.innerHTML = `
            <table class="tabela-dialog">
                <tr>
                    <th></th>
                    <th class="image-container"><img class="car car1" src="../../public/images/xls_diesel.jpg" alt=""></th>
                    <th class="image-container"><img class="car car2" src="../../public/images/storm.jpg" alt=""></th>
                </tr>
    
                <tr class="par modelo">
                    <td>Modelo</td>
                    <td>XLS 2.2 Diesel 4X4 AT 2022</td>
                    <td>Storm 3.2 Diesel 4X4 AT 2022</td>
                </tr>

                <tr class="impar">
                    <td>Altura da caçamba (mm)</td>
                    <td>511</td>
                    <td>511</td>
                </tr>

                <tr class="par">
                    <td>Altura do veículo (mm)</td>
                    <td>1821</td>
                    <td>1821</td>
                </tr>

                <tr class="impar">
                    <td>Altura livre do solo (mm)</td>
                    <td>232</td>
                    <td>232</td>
                </tr>

                <tr class="par">
                    <td>Capacidade de carga (kg)</td>
                    <td>1076</td>
                    <td>1040</td>
                </tr>

                <tr class="impar">
                    <td>Motor</td>
                    <td>2.2</td>
                    <td>3.2</td>
                </tr>

                <tr class="par">
                    <td>Potência (CV)</td>
                    <td>160</td>
                    <td>200</td>
                </tr>

                <tr class="impar">
                    <td>Volume da caçamba (L)</td>
                    <td>1180</td>
                    <td>1180</td>
                </tr>

                <tr class="par">
                    <td>Roda</td>
                    <td>Aço Estampado 16</td>
                    <td>Liga Leve 17</td>
                </tr>

                <tr class="impar">
                    <td>Preço</td>
                    <td>R$ 155.890,00</td>
                    <td>R$ 169.740,00</td>
                </tr>
            </table>
            <div class="container-fechar"><button class="fechar" onclick="hide()">Fechar</button></div>`
        }
    }
    else {
        Swal.fire({
            icon: "error",
            title: "Selecione dois veículos",
        });
    }
});

function hide() {
    dialog.close();
    document.getElementById("video").play();
    document.body.style.overflow = "initial";
}

function changeBackground() {
    document.getElementById("video").pause();
    document.body.style.overflow = "hidden";
}

const info = document.querySelectorAll(".info");
info.forEach((e) => {
    e.addEventListener("click", () => {
        if (e.className.includes("info1")) {
            changeBackground();
            dialog.showModal();
            dialog.innerHTML = `           
                <table class="tabela-dialog">
                <tr>

                    <th colspan="2" class="image-container"><img class="car car1" src="../../public/images/xl_cabine.jpg" alt=""></th>
                </tr>
    
                <tr class="par modelo">
                    <td>Modelo</td>
                    <td>XL Cabine Diesel 4x4 2022</td>
                </tr>

                <tr class="impar">
                    <td>Altura da caçamba (mm)</td>
                    <td>511</td>
                </tr>

                <tr class="par">
                    <td>Altura do veículo (mm)</td>
                    <td>1821</td>
                </tr>

                <tr class="impar">
                    <td>Altura livre do solo (mm)</td>
                    <td>232</td>
                </tr>

                <tr class="par">
                    <td>Capacidade de carga (kg)</td>
                    <td>1234</td>
                </tr>

                <tr class="impar">
                    <td>Motor</td>
                    <td>2.2</td>
                </tr>

                <tr class="par">
                    <td>Potência (CV)</td>
                    <td>160</td>
                </tr>

                <tr class="impar">
                    <td>Volume da caçamba (L)</td>
                    <td>1420</td>
                </tr>

                <tr class="par">
                    <td>Roda</td>
                    <td>Aço Estampado 16</td>
                </tr>

                <tr class="impar">
                    <td>Preço</td>
                    <td>R$ 153.376,00</td>
                </tr>
            </table>
            <div class="container-fechar"><button class="fechar" onclick="hide()">Fechar</button></div>`
        }

        else if(e.className.includes("info2")) {
            changeBackground();
            dialog.showModal();
            dialog.innerHTML = `  <table class="tabela-dialog">
                <tr>
                    <th colspan="2" class="image-container"><img class="car car1" src="../../public/images/xls_diesel.jpg" alt=""></th>
                </tr>
    
                <tr class="par modelo">
                    <td>Modelo</td>
                    <td>XLS 2.2 Diesel 4X4 AT 2022</td>
                </tr>

                <tr class="impar">
                    <td>Altura da caçamba (mm)</td>
                    <td>511</td>
                </tr>

                <tr class="par">
                    <td>Altura do veículo (mm)</td>
                    <td>1821</td>
                </tr>

                <tr class="impar">
                    <td>Altura livre do solo (mm)</td>
                    <td>232</td>
                </tr>

                <tr class="par">
                    <td>Capacidade de carga (kg)</td>
                    <td>1076</td>
                </tr>

                <tr class="impar">
                    <td>Motor</td>
                    <td>2.2</td>
                </tr>

                <tr class="par">
                    <td>Potência (CV)</td>
                    <td>160</td>
                </tr>

                <tr class="impar">
                    <td>Volume da caçamba (L)</td>
                    <td>1180</td>
                </tr>

                <tr class="par">
                    <td>Roda</td>
                    <td>Aço Estampado 16</td>
                </tr>

                <tr class="impar">
                    <td>Preço</td>
                    <td>R$ 155.890,00</td>
                </tr>
            </table>
            <div class="container-fechar"><button class="fechar" onclick="hide()">Fechar</button></div>`
               
        }

        else {
            changeBackground();
            dialog.showModal();
            dialog.innerHTML = `<table class="tabela-dialog">
                <tr>
                    <th colspan="2" class="image-container"><img class="car car2" src="../../public/images/storm.jpg" alt=""></th>
                </tr>
    
                <tr class="par modelo">
                    <td>Modelo</td>
                    <td>Storm 3.2 Diesel 4X4 AT 2022</td>
                </tr>

                <tr class="impar">
                    <td>Altura da caçamba (mm)</td>
                    <td>511</td>
                </tr>

                <tr class="par">
                    <td>Altura do veículo (mm)</td>
                    <td>1821</td>
                </tr>

                <tr class="impar">
                    <td>Altura livre do solo (mm)</td>
                    <td>232</td>
                </tr>

                <tr class="par">
                    <td>Capacidade de carga (kg)</td>
                    <td>1040</td>
                </tr>

                <tr class="impar">
                    <td>Motor</td>
                    <td>3.2</td>
                </tr>

                <tr class="par">
                    <td>Potência (CV)</td>
                    <td>200</td>
                </tr>

                <tr class="impar">
                    <td>Volume da caçamba (L)</td>
                    <td>1180</td>
                </tr>

                <tr class="par">
                    <td>Roda</td>
                    <td>Liga Leve 17</td>
                </tr>

                <tr class="impar">
                    <td>Preço</td>
                    <td>R$ 169.740,00</td>
                </tr>
            </table>
            <div class="container-fechar"><button class="fechar" onclick="hide()">Fechar</button></div>`
        }

    });
});