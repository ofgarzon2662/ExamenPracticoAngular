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

  getPlants() {
    this.plantaService.getPlants().subscribe(plantas => {
      this.plantas = plantas;
    });
  }
  ngOnInit() {
    this.getPlants();
  }

}
