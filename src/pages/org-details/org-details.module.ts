import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { OrgDetailsPage } from './org-details';

@NgModule({
  declarations: [
    OrgDetailsPage,
  ],
  imports: [
    IonicPageModule.forChild(OrgDetailsPage),
  ],
})
export class OrgDetailsPageModule {}
