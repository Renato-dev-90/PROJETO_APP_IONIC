import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { LanchesPage } from '../lanches/lanches';
import { PratoprincipalPage } from '../pratoprincipal/pratoprincipal';
import { PratododiaPage } from '../pratododia/pratododia';
import { SobremesasPage } from '../sobremesas/sobremesas';
import { BebidasPage } from '../bebidas/bebidas';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  lanches() {
    this.navCtrl.push(LanchesPage);
  }

  pratoprincipal(){
    this.navCtrl.push(PratoprincipalPage);
  }

  pratododia(){
    this.navCtrl.push(PratododiaPage);
  }

  sobremesas(){
    this.navCtrl.push(SobremesasPage);
  }

  bebidas() {
    this.navCtrl.push(BebidasPage);
  }

}
