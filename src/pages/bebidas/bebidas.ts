import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RefrigerantePage } from '../refrigerante/refrigerante';
import { CervejaPage } from '../cerveja/cerveja';
import { SucosPage } from '../sucos/sucos';
import { WhiskyPage } from '../whisky/whisky';
import { AguaPage } from '../agua/agua';

/**
 * Generated class for the BebidasPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-bebidas',
  templateUrl: 'bebidas.html',
})
export class BebidasPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BebidasPage');
  }

  refrigerante() {
    this.navCtrl.push(RefrigerantePage);
  }

  cerveja(){
    this.navCtrl.push(CervejaPage);
  }

  sucos() {
    this.navCtrl.push(SucosPage);
  }

  whisky() {
    this.navCtrl.push(WhiskyPage);
  }

  agua(){
    this.navCtrl.push(AguaPage);
  }

}
