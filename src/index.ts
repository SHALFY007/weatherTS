import {getWeather, render}  from './weather.js'

const weather:Element = document.querySelector('.weather');
const input:HTMLInputElement = document.querySelector('.find_text');
const find:Element = document.querySelector('.find');

find.addEventListener('click', async () => {
    weather.innerHTML = ''
    console.log(getWeather(input.value))
    weather.insertAdjacentHTML('afterbegin', `${render(input.value, await getWeather(input.value))}`)
})