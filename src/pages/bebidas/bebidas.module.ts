import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BebidasPage } from './bebidas';
import { RefrigerantePage } from '../refrigerante/refrigerante';
import { CervejaPage } from '../cerveja/cerveja';
import { SucosPage } from '../sucos/sucos';
import { WhiskyPage } from  '../whisky/whisky';
import { AguaPage } from '../agua/agua';

@NgModule({
  declarations: [
    BebidasPage,
    RefrigerantePage,
    CervejaPage,
    SucosPage,
    WhiskyPage,
    AguaPage,

    ],
  imports: [
    IonicPageModule.forChild(BebidasPage),
  ],
})
export class BebidasPageModule {}
