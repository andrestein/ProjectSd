import { Injectable } from '@angular/core'
import { AngularFireDatabase } from 'angularfire2/database';

@Injectable()
export class Data{
    constructor(public afDB: AngularFireDatabase){}
    public getToogles(){
        return this.afDB.list('plantapp/system/').valueChanges();
    }

    public getState(){
        return this.afDB.list('plantapp/autostate/').valueChanges();
    }

    public createDato(nota){
        this.afDB.database.ref('data/'+nota.id).set(nota);
    }
}