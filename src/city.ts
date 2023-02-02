const cities = ['Moscow', 'Volgograd', 'Berlin']

export function findCity(title:HTMLInputElement, el:Element) {
    for (let city of cities) {
        if (city.startsWith(title.value) && title.value != '') {
            el.innerHTML = city
            return
        } else {
            el.innerHTML = ''
        }
    }
}

export function addCity(input:HTMLInputElement, tips:Element) {
    input.value = tips.innerHTML
}