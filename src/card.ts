export class Card {
    title:string
    value:number
    desc:string
    img:string
    feels: number
    constructor(
        title:string, value:number, desc:string, img:string, feels:number
    ) {
        this.title = title
        this.value = value
        this.desc = desc 
        this.img = img 
        this.feels = feels
    }

    

    render(el:Element) {
        el.innerHTML = `
        <div class="card" style="width: 18rem;">
        <img src="${this.img}" class="card-img-top" alt="...">
        <div class="card-body">
        <h5 class="card-title">${this.title}</h5>
        <p class="card-text">Temp is ${this.value}C</p>
        <p class="card-text">${this.desc}</p>
        <p class="card-text">Feels like ${this.feels}C</p>
        <a href="#" class="btn btn-primary clear-btn">clear</a>
        </div>
        </div>
        `
    }

    static getResetBtn() {
        return document.querySelector('.clear-btn')
    }
}