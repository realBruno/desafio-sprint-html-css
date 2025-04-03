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

const dialog = document.querySelector("dialog");

button.addEventListener("click", () => {
    if (!max) {
        if (xl.checked && xls.checked) {
            dialog.style.visibility = "visible";
            dialog.innerHTML = `
            <table class="tabela-dialog">
                <tr>
                    <th style="visibility: hidden;" class="image-container"><img class="car car1" src="../../public/images/xls_diesel.jpg" alt=""></th>
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
            <button class="fechar">Fechar</button>`
        }
        else if (xl.checked && storm.checked) {
            dialog.style.visibility = "visible";
            dialog.innerHTML = `
            <table class="tabela-dialog">
                <tr>
                    <th style="visibility: hidden;" class="image-container"><img class="car car1" src="../../public/images/xls_diesel.jpg" alt=""></th>
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
            <button class="fechar">Fechar</button>`
        }
        else if (xls.checked && storm.checked) {
            dialog.style.visibility = "visible";
            dialog.innerHTML = `
            <table class="tabela-dialog">
                <tr>
                    <th style="visibility: hidden;" class="image-container"><img class="car car1" src="../../public/images/xls_diesel.jpg" alt=""></th>
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
            <button class="fechar">Fechar</button>`
        }
    }
    else {
        alert("msg de erro")
    }
});

/* QUANDO ENTRAR NA TELA DO COMPARADOR, PAUSAR O VIDEO E DESFOCAR BACKGROUND
*/

document.querySelector(".fechar").addEventListener("click", () => {
    console.log("entrou")
    document.querySelector(".fechar").style.visibility = "hidden";
});