import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Data } from '../../services/Data';
import {AngularFireDatabase} from 'angularfire2/database/database'

@Component({  
  selector: 'page-viwe',
  templateUrl: 'view.html'
})
export class View {
  constructor(public navCtrl: NavController){}

}