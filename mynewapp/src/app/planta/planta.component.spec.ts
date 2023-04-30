/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { faker } from '@faker-js/faker';

import { HttpClientModule } from '@angular/common/http';
import { PlantaComponent } from './planta.component';
import { PlantaService } from './planta.service';
import { Planta } from './planta';

describe('PlantaListComponent', () => {
  let component: PlantaComponent;
  let fixture: ComponentFixture<PlantaComponent>;
  let debug: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      declarations: [ PlantaComponent ],
      providers: [ PlantaService ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlantaComponent);
    component = fixture.componentInstance;

    for(let i = 0; i < 3; i++) {
      const plantax = new Planta(
        faker.datatype.number(),
        faker.name.firstName(),
        faker.name.firstName(),
        faker.lorem.sentence(),
        faker.datatype.number(),
        faker.lorem.sentence(),
        faker.lorem.sentence())

    component.plantas.push(plantax)
    }
    fixture.detectChanges();
   debug = fixture.debugElement;
 });


 it('should create', () => {
  expect(component).toBeTruthy();
});

it("Component has a table", () => {
  expect(debug.query(By.css("tbody")).childNodes.length).toBeGreaterThan(0);
});

it('should have 4 <tr> elements', () => {
  expect(debug.queryAll(By.css('tr'))).toHaveSize(4)
});

it('should have 12 <td> elements', () => {
  expect(debug.queryAll(By.css('td'))).toHaveSize(12)
});

it('should have dd tag with the plant id', () => {
  debug.queryAll(By.css('#id')).forEach((dd, i)=>{
    expect(dd.nativeElement.textContent).toContain(component.plantas[i].id)
  });
});

it('should have dd tag with the plant name', () => {
  debug.queryAll(By.css('#nombre_comun')).forEach((dd, i)=>{
    expect(dd.nativeElement.textContent).toContain(component.plantas[i].nombre_comun)
  });
});

it('should have dd tag with the plant tipo', () => {
  debug.queryAll(By.css('#tipo')).forEach((dd, i)=>{
    expect(dd.nativeElement.textContent).toContain(component.plantas[i].tipo)
  });
});

it('should have dd tag with the plant clima', () => {
  debug.queryAll(By.css('#clima')).forEach((dd, i)=>{
    expect(dd.nativeElement.textContent).toContain(component.plantas[i].clima)
  });
});
});
