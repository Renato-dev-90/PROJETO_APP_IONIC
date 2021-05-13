import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { LanchesPage } from '../pages/lanches/lanches';
import { EspecialPage} from '../pages/especial/especial';
import { XbaconPage} from '../pages/xbacon/xbacon';
import { SupersaladaPage } from '../pages/supersalada/supersalada';
import { AmorecoPage } from '../pages/amoreco/amoreco';
import { PratoprincipalPage } from '../pages/pratoprincipal/pratoprincipal';
import { PratodehojePage } from '../pages/pratodehoje/pratodehoje';
import { SaladaPage } from '../pages/salada/salada';
import { EconomicoPage } from '../pages/economico/economico';
import { XeggPage } from '../pages/xegg/xegg';
import { PratododiaPage } from '../pages/pratododia/pratododia';
import { SalgadinhosPage } from '../pages/salgadinhos/salgadinhos';
import { CasalPage } from '../pages/casal/casal';
import { SobremesasPage } from '../pages/sobremesas/sobremesas';
import { MoussemPage} from '../pages/moussem/moussem';
import { TortadelimaoPage } from '../pages/tortadelimao/tortadelimao';
import { BolodefubaPage } from '../pages/bolodefuba/bolodefuba';
import { TortaholandesaPage } from '../pages/tortaholandesa/tortaholandesa';
import { SorvetedechocolatePage } from '../pages/sorvetedechocolate/sorvetedechocolate';
import { BebidasPage } from '../pages/bebidas/bebidas';
import { RefrigerantePage } from '../pages/refrigerante/refrigerante';
import { CervejaPage } from '../pages/cerveja/cerveja';
import { SucosPage } from '../pages/sucos/sucos';
import { WhiskyPage } from '../pages/whisky/whisky';
import { AguaPage } from '../pages/agua/agua';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LanchesPage,
    EspecialPage,
    XbaconPage,
    SupersaladaPage,
    AmorecoPage,
    PratoprincipalPage,
    PratodehojePage,
    SaladaPage,
    EconomicoPage,
    XeggPage,
    PratododiaPage,
    SalgadinhosPage,
    CasalPage,
    SobremesasPage,
    MoussemPage,
    TortadelimaoPage,
    BolodefubaPage,
    TortaholandesaPage,
    SorvetedechocolatePage,
    BebidasPage,
    RefrigerantePage,
    CervejaPage,
    SucosPage,
    WhiskyPage,
    AguaPage,



  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LanchesPage,
    EspecialPage,
    XbaconPage,
    SupersaladaPage,
    AmorecoPage,
    PratoprincipalPage,
    PratodehojePage,
    SaladaPage,
    EconomicoPage,
    XeggPage,
    PratododiaPage,
    SalgadinhosPage,
    CasalPage,
    SobremesasPage,
    MoussemPage,
    TortadelimaoPage,
    BolodefubaPage,
    TortaholandesaPage,
    SorvetedechocolatePage,
    BebidasPage,
    RefrigerantePage,
    CervejaPage,
    SucosPage,
    WhiskyPage,
    AguaPage,

  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
