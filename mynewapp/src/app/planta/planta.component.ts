import { Component, OnInit } from '@angular/core';
import { Planta } from './planta';
import { PlantaService } from './planta.service'

@Component({
  selector: 'app-planta',
  templateUrl: './planta.component.html',
  styleUrls: ['./planta.component.css']
})

export class PlantaComponent implements OnInit {


  constructor(private plantaService: PlantaService) { }
  plantas: Array<Planta> = [];
  interior: number = 0;
  exterior: number = 0;
  total: number = 0;
  getPlants() {
    this.plantaService.getPlants().subscribe(plantas => {
      this.plantas = plantas;
    });
  }

  loopData(): void {
    for (let i = 0; i < this.plantas.length; i++) {
      if (this.plantas[i].tipo === 'Interior') {
        this.interior += 1;
      }
      if (this.plantas[i].tipo === 'Exterior') {
        this.exterior += 1;
      }
    }
  }

  ngOnInit() {
    this.getPlants();
    this.plantaService.getPlants().subscribe(plantas => {
      this.plantas = plantas;
      this.loopData();
    });


  }

}
