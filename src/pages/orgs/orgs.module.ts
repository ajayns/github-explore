import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { OrgsPage } from './orgs';

@NgModule({
  declarations: [
    OrgsPage,
  ],
  imports: [
    IonicPageModule.forChild(OrgsPage),
  ],
})
export class OrgsPageModule {}
