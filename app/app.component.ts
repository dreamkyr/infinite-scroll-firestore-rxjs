import { Component, OnInit, Renderer2 } from '@angular/core';
import { FirebaseService } from './firebase.service';
import { AngularFirestore, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import { Aviso } from './aviso';
import { Categoria } from './categoria';

import { PaginationService } from './pagination.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent implements OnInit  {

  avisos: Observable<Aviso[]>;
  avisosTest: Observable<Aviso[]>;
  categorias: any;
  categoriasTest: Observable<Categoria[]>;
  selectedCategoria: any;

  constructor (private fs: FirebaseService, private afs: AngularFirestore, public page: PaginationService) {}

  ngOnInit() {
    this.getAvisosTest()
    this.getCategoriasTest()
  }

  getCategoriasTest() {
    this.categoriasTest = this.fs.getCategoriasTest();
  }

  getAvisosTest() {
    this.page.init('avisosTest', 'fechaCreacion', { reverse: true, prepend: false })
  }

  scrollHandler(e) {
    if (e === 'bottom') {
      this.page.more()
    }

    // if (e === 'top') {
    //   this.page.more()
    // }
  }

  filtrarData( categoria: Categoria) {
    this.avisosTest = this.fs.filterBy(categoria);
    this.selectedCategoria = categoria;
  }

  
}
