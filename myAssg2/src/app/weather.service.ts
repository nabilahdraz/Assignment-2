import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
//link url weather
  url='https://api.openweathermap.org/data/2.5/weather';
  apikey= '27e7d05d05a3c4200e465bad80260d40'; //api key

  constructor(private http: HttpClient) { }

  getWeatherDataByCoords(lat:any, lon:any){
  let params = new HttpParams()
  .set('lat', lat)
  .set('lon', lon)
  .set('units','imperial')
  .set('appid', this.apikey)

  return this.http.get(this.url, {params});
}

getWeatherDataByCityName(city: string){
  let params = new HttpParams()
  .set('q', city)
  .set('units', 'imperial')
  .set('appid', this.apikey)
  return this.http.get(this.url ,{params});
}
}



