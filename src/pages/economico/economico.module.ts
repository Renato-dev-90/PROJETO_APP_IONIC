import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EconomicoPage } from './economico';

@NgModule({
  declarations: [
    EconomicoPage,
  ],
  imports: [
    IonicPageModule.forChild(EconomicoPage),
  ],
})
export class EconomicoPageModule {}
