import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import { Aviso } from './aviso';
import { Categoria } from './categoria';

@Injectable()
export class FirebaseService {

  avisos: Observable<Aviso[]>;
  avisosTest: Observable<Aviso[]>;
  estadoChange: boolean = false;
  categoriasTest: Observable<Categoria[]>;

  constructor( private afs: AngularFirestore ) { }

  getAvisos() {
    this.avisos = this.afs.collection('avisos').snapshotChanges().map(actions => {
      return actions.map(a => {
        const data = a.payload.doc.data() as Aviso;
        const id = a.payload.doc.id;
        return { id, ...data };
      });
    });
    return this.avisos;
  }

  getCategoriasTest() {
    this.categoriasTest = this.afs.collection('categoriasTest').valueChanges()
    return this.categoriasTest
  }



  filterBy(categoria: Categoria) {
    this.avisos = this.afs.collection('avisosTest', ref => ref.where('categoria','==', categoria )).valueChanges()

    return this.avisosTest;
  };

  

}