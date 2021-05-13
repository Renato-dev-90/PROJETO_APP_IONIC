import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { EconomicoPage } from '../economico/economico';
import { PratodehojePage } from '../pratodehoje/pratodehoje';
import { SaladaPage } from '../salada/salada';
import { SalgadinhosPage } from '../salgadinhos/salgadinhos';
import { CasalPage } from '../casal/casal';

/**
 * Generated class for the PratoprincipalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-pratoprincipal',
  templateUrl: 'pratoprincipal.html',
})
export class PratoprincipalPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PratoprincipalPage');
  }

  pratodehoje(){
    this.navCtrl.push(PratodehojePage);
  }

  salada(){
    this.navCtrl.push(SaladaPage);
  }

  economico(){
    this.navCtrl.push(EconomicoPage);
  }

  salgadinhos(){
    this.navCtrl.push(SalgadinhosPage);
  }

  casal(){
    this.navCtrl.push(CasalPage);
  }

}
