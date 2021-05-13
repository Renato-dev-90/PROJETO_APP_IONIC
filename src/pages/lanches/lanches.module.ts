import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LanchesPage } from './lanches';
import { EspecialPage} from '../especial/especial';
import { XbaconPage } from '../xbacon/xbacon';
import { SupersaladaPage } from '../supersalada/supersalada';
import { AmorecoPage } from '../amoreco/amoreco';
import { XeggPage } from '../xegg/xegg';

@NgModule({
  declarations: [
    LanchesPage,
    EspecialPage,
    XbaconPage,
    SupersaladaPage,
    AmorecoPage,
    XeggPage,
  ],
  imports: [
    IonicPageModule.forChild(LanchesPage),
  ],
})
export class LanchesPageModule {}
