import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MoussemPage } from '../moussem/moussem';
import { TortadelimaoPage } from '../tortadelimao/tortadelimao';
import { BolodefubaPage } from '../bolodefuba/bolodefuba';
import { TortaholandesaPage } from '../tortaholandesa/tortaholandesa';
import { SorvetedechocolatePage } from '../sorvetedechocolate/sorvetedechocolate';

/**
 * Generated class for the SobremesasPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-sobremesas',
  templateUrl: 'sobremesas.html',
})
export class SobremesasPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SobremesasPage');
  }

  moussem(){
    this.navCtrl.push(MoussemPage);
  }

  tortadelimao(){
    this.navCtrl.push(TortadelimaoPage);
  }

  bolodefuba() {
    this.navCtrl.push(BolodefubaPage);
  }

  tortaholandesa() {
    this.navCtrl.push(TortaholandesaPage);
  }

  sorvetedechocolate() {
    this.navCtrl.push(SorvetedechocolatePage);
  }
  }

