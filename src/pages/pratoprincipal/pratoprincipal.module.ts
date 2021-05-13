import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PratoprincipalPage } from './pratoprincipal';
import { PratodehojePage } from '../pratodehoje/pratodehoje';
import { SaladaPage } from '../salada/salada';
import { EconomicoPage } from '../economico/economico';
import { SalgadinhosPage} from '../salgadinhos/salgadinhos';
import { CasalPage } from '../casal/casal';
@NgModule({
  declarations: [
    PratoprincipalPage,
    PratodehojePage,
    SaladaPage,
    EconomicoPage,
    SalgadinhosPage,
    CasalPage,
  ],
  imports: [
    IonicPageModule.forChild(PratoprincipalPage),
  ],
})
export class PratoprincipalPageModule {}
