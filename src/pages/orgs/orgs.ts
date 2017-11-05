import { Component } from '@angular/core';
import { IonicPage, PopoverController, NavController, NavParams } from 'ionic-angular';

import { Org } from '../../models/org';
import { GithubOrgsProvider } from '../../providers/github-orgs/github-orgs';

import { OrgDetailsPage } from '../org-details/org-details';
import { PopoverMenuComponent } from '../../components/popover-menu/popover-menu';

@IonicPage()
@Component({
  selector: 'page-orgs',
  templateUrl: 'orgs.html',
})
export class OrgsPage {
  orgs: Org[];
  orgsBkp: Org[];
  searchTerm: string;
  contentLoaded: boolean;

  constructor(public navCtrl: NavController, public navParams: NavParams, private githubOrgsProvider: GithubOrgsProvider, private popoverCtrl: PopoverController) {
    this.contentLoaded = false;
    
    //Load organizations from api
    githubOrgsProvider.load().subscribe(orgs => {
      this.orgs = orgs;
      this.orgsBkp = orgs;
      this.contentLoaded = true;
    })
  }

  // Go to org details page
  goToOrg(orgUrl: string) {
    this.navCtrl.push(OrgDetailsPage, {orgUrl});
  }

  // Search for orgs
  search(event) {
    if (this.searchTerm.trim() === '') {
      this.orgs = this.orgsBkp;
    } else {
      this.contentLoaded = false;
      this.githubOrgsProvider.search(this.searchTerm).subscribe(orgs => {
        this.orgs = orgs;
        this.contentLoaded = true;
      })
    }
  }

  // Popover control
  presentPopover(ev) {
    let popover = this.popoverCtrl.create(PopoverMenuComponent);
    popover.present({ ev });
  }

}
