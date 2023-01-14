export async function getWeather(place:string):Promise<number> {
    let weather:number = 0;
    await fetch(`http://api.weatherapi.com/v1/current.json?key=c2ecdba7a8a648009b4173326222812&q=${place}&aqi=no`)
    .then(data =>data.json())
    .then(res => res.current.temp_c)
    .then(a => weather = a)
    
    return weather
   
}

export function render(place:string, weather:number) { 
    console.log(`Сейчас в городе ${place} ${weather} градусов`)
    return `Сейчас в городе ${place} ${weather} градусов`
}
