import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Data } from '../../services/Data';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  notas = [];
  constructor(public navCtrl: NavController, public data: Data) {
    this.notas = data.getNotes();
  }
  public crearData(){
    var dato = {id:1,title:'prueba'};
    this.data.createDato(dato);
  }
}
