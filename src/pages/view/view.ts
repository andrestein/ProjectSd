import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {AngularFireDatabase, AngularFireList} from 'angularfire2/database/database'

@Component({
  selector: 'page-view',
  templateUrl: 'view.html'
})
export class View {
  notes:AngularFireList<any>;
  variables:AngularFireList<any>;
  constructor(public navCtrl: NavController,public afdb: AngularFireDatabase) {
     this.notes = afdb.list('/plantapp/state').valueChanges();
     this.variables = afdb.list('/plantapp/variables').valueChanges();
  }
}  