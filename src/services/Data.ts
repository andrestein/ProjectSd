import { Injectable } from '@angular/core'
import { AngularFireDatabase } from 'angularfire2/database';

@Injectable()
export class Data{
    constructor(public afDB: AngularFireDatabase){}
    notes = [
        {id:1,title:'hola'},
        {id:2,title:'hola2'},
        {id:3,title:'hola3'}
    ];
    public getNotes(){
        return this.notes;
    }
    public createDato(nota){
        this.afDB.database.ref('notes/'+nota.id).set(nota);
    }
}