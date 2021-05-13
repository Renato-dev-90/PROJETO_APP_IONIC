import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { WhiskyPage } from './whisky';

@NgModule({
  declarations: [
    WhiskyPage,
  ],
  imports: [
    IonicPageModule.forChild(WhiskyPage),
  ],
})
export class WhiskyPageModule {}
