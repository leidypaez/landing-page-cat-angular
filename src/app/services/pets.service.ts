import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PetsService {

  constructor() { }

  public dataPets:any[] = []

  cargar(){
   let tmp:any = localStorage.getItem('animals')
   if(tmp == undefined || tmp == null){
     this.dataPets = [];
   }
   else{
    this.dataPets =  JSON.parse(tmp)
   }
  }

  addPets(item:any){
    this.dataPets.push(item)
    localStorage.setItem('animals', JSON.stringify(this.dataPets))
    console.log(this.dataPets)
  }
}
