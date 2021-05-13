import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,} from 'ionic-angular';
import { EspecialPage } from '../especial/especial';
import { XbaconPage } from '../xbacon/xbacon';
import { SupersaladaPage } from '../supersalada/supersalada';
import { AmorecoPage } from '../amoreco/amoreco';
import { XeggPage } from '../xegg/xegg';


@IonicPage()
@Component({
  selector: 'page-lanches',
  templateUrl: 'lanches.html',
})
export class LanchesPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LanchesPage');
  }

  Especial(){
      this.navCtrl.push(EspecialPage);
  }

  Xbacon(){
    this.navCtrl.push(XbaconPage);
  }

  Supersalada(){
    this.navCtrl.push(SupersaladaPage);
  }

  Amoreco(){
    this.navCtrl.push(AmorecoPage);
  }

  Xegg(){
    this.navCtrl.push(XeggPage);
  }

}
