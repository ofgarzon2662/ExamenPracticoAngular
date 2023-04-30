import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Planta } from './planta';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class PlantaService {
  private apiUrl = environment.baseUrl + '202212_MISW4104_Grupo2.json';

  constructor(private http: HttpClient) { }

  getPlants(): Observable<Planta[]> {
    return this.http.get<Planta[]>(this.apiUrl);
}

}
