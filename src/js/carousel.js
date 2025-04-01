'use strict';

class Carousel {
    constructor(image, title, url) {
        this.image = image;
        this.title = title;
        this.url = url;
    }

    showImage() {
        const image = document.querySelector(".home-item");
        image.src = this.image;

        const title = document.querySelector(".figcaption");
        title.innerHTML = this.title;

        const url = document.querySelector(".home-item-link");
        url.setAttribute("href", this.url);
    }
}

const home_item_1 = new Carousel("../../public/images/home-item-1.jpg",
    `Esta é a nova Ranger Ford 2022. Verifique novidades <a class="aqui" href="#">aqui</a>`,
    "../../src/pages/lancamentos.html");
home_item_1.showImage()

const home_item_2 = new Carousel("../../public/images/home-item-2.jpg",
    `Esta é a nova Ranger Ford 2022. Verifique novidades <a class="aqui" href="#">aqui</a>`,
    "../../src/pages/lancamentos.html");

home_item_2.showImage();

const home_item_3 = new Carousel("../../public/images/home-item-3.jpg",
    `Nova Ford Bronco Sport 2022`,
    "../../src/pages/lancamentos.html");

home_item_3.showImage();