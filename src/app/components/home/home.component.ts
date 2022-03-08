import { Component, OnInit } from '@angular/core';
import { PetsService } from 'src/app/services/pets.service';
import  listOfPets  from 'src/assets/json/animals.json';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  animal:any = listOfPets;

  public dishes: any;
  public id: any

  constructor(private dataPets:PetsService) { }

  ngOnInit(): void {
  }

  add(item:any) {
    this.dataPets.addPets(item)
    console.log(this.dataPets);
  }

    // filtro de cada uno de los platos
    type:string = 'Perros';
    changeType(text:string) {
      this.type = text;
    }
}
