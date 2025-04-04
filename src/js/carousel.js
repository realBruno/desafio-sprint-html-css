'use strict';

const image = document.querySelector(".list-item .link-item .image");
const figcaption = document.querySelector(".figcaption-class");
const link_item = document.querySelector(".link-item");

let id = 0;

class Carousel {
    constructor(objectArr) {
        this.objectArr = objectArr;
    }

    Start() {
        setInterval(() => {
            this.Next()
        }, 2000);
    }

    Next() {
        this.Update(id);
        if (id >= objectArr.length - 1) id = 0;
        else id++;
    }

    Update(id) {
        image.src = objectArr[id].src;
        figcaption.innerHTML = objectArr[id].title;
    }
}

const objectArr = [
    {
        src: `./public/images/home-item-1.jpg`,
        title: `Esta é a nova Ranger Ford 2022. Verifique novidades <a class="aqui" href="#">aqui</a>`,
        url: "./src/pages/lancamentos.html"
    },

    {
        src: `./public/images/home-item-2.jpg`,
        title: "Montagem do primeiro carro da Ford no Brasil (São Paulo, 1921)",
        url: "./src/pages/lancamentos.html"
    },

    {
        src: `./public/images/home-item-3.jpg`,
        title: "Novo Ford Bronco Sport 2022",
        url: "./src/pages/lancamentos.html"
    }
]

const carousel = new Carousel(objectArr);

carousel.Start();