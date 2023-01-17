import {getWeather, render}  from './weather.js'
import {findCity, addCity} from './city.js'

const weather:Element = document.querySelector('.weather');
const input:HTMLInputElement = document.querySelector('.find_text');
const find:Element = document.querySelector('.find');
const tips:Element = document.querySelector('.tips')

find.addEventListener('click', async () => {
    weather.innerHTML = ''
    weather.insertAdjacentHTML('afterbegin', `${render(input.value, await getWeather(input.value))}`)
})

input.addEventListener('input', (e) => findCity(e.target, tips))
tips.addEventListener('click', () => addCity(input, tips) )