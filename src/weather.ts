
async function getData(place):Promise<any> {
    let data: any;
    await fetch(`http://api.weatherapi.com/v1/current.json?key=c2ecdba7a8a648009b4173326222812&q=${place}&aqi=no`)
        .then(data =>data.json())
        .then(res => res.current)
        .then(arr => data = arr)
        return data
}

export function getWeather(place:string):any {
    let weather:any;
    try {
        weather = getData(place)
        return weather
    } catch (error) {
        console.log(error)
    }

   
}

export function render(place:string, weather:number) { 
    console.log(`Сейчас в городе ${place} ${weather} градусов`)
    return `Сейчас в городе ${place} ${weather} градусов`
}
