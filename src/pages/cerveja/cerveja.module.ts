import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CervejaPage } from './cerveja';

@NgModule({
  declarations: [
    CervejaPage,
  ],
  imports: [
    IonicPageModule.forChild(CervejaPage),
  ],
})
export class CervejaPageModule {}
