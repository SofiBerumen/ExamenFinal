import { Component } from '@angular/core';
import {AngularFirestore} from 'angularfire2/firestore';
import {HttpClient} from '@angular/common/http';
import { ModalController } from '@ionic/angular';
import { ModalPage } from '../modal/modal.page';
import {Router, NavigationExtras} from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  datos: any=[];
  bande: boolean = false;
  c: String;

  constructor(private http: HttpClient, private route: Router){

  }

  consulta(){
    for (let i = 1; i < 16; i++) {
      this.http.get("https://swapi.co/api/people/"+i).subscribe((data)=>{
        console.log("users: ", data);
        this.datos.push(data);
       this.bande=true;

      });
    }

  }

  ir(cont: any) {
    cont.substr(9, 2);
    this.route.navigateByUrl('/pag1/'+cont);

  }

}
interface Users{
  Nombre?: string;
  Cabello?: string;
  Peso?: string;
}
