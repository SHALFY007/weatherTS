import {getWeather, render}  from './weather.js'
import {findCity, addCity} from './city.js'
import {Card} from './card.js'

const weather:Element = document.querySelector('.current-weather');
const input:HTMLInputElement = document.querySelector('.find_text');
const find:Element = document.querySelector('.find');
const tips:Element = document.querySelector('.tips');
const viewCard:boolean = false

find.addEventListener('click', async () => {
    weather.innerHTML = ''
    let temp = await getWeather(input.value)
    console.log(temp)
    new Card(input.value, temp.temp_c, temp.condition.text, temp.condition.icon, temp.feelslike_c).render(weather)
    const clearBtn = Card.getResetBtn()
    clearBtn.addEventListener('click', () => {
        weather.innerHTML = ''
        tips.innerHTML = ''
    })
})



input.addEventListener('input', (e:any) => findCity(e.target, tips))
tips.addEventListener('click', () => {
    addCity(input, tips) 
    tips.innerHTML = ''
})