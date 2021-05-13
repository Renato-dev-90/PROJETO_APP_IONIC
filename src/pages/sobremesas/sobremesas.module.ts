import { SorvetedechocolatePageModule } from './../sorvetedechocolate/sorvetedechocolate.module';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SobremesasPage } from './sobremesas';
import { MoussemPage } from '../moussem/moussem';
import { TortadelimaoPage } from '../tortadelimao/tortadelimao';
import { BolodefubaPage } from '../bolodefuba/bolodefuba';
import { TortaholandesaPage } from '../tortaholandesa/tortaholandesa';
import { SorvetedechocolatePage } from '../sorvetedechocolate/sorvetedechocolate';

@NgModule({
  declarations: [
    SobremesasPage,
    MoussemPage,
    TortadelimaoPage,
    BolodefubaPage,
    TortaholandesaPage,
    SorvetedechocolatePage,
  ],
  imports: [
    IonicPageModule.forChild(SobremesasPage),
  ],
})
export class SobremesasPageModule {}
