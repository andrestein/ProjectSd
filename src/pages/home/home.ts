import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Data } from '../../services/Data';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  notas = [];
  dato ={air:"",earth:"",light:"",tem:""};
  constructor(public navCtrl: NavController, public data: Data) {
    this.notas = data.getNotes();
  }
  public crearData(){
    this.data.createDato(this.dato);
    this.clearData();
  }
  private clearData(){
    this.dato.air  = "";
    this.dato.earth = "";
    this.dato.light = "";
    this.dato.tem = "";
  }
}
