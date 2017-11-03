import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { Org } from '../../models/org';
import { GithubOrgsProvider } from '../../providers/github-orgs/github-orgs';

import { OrgDetailsPage } from '../org-details/org-details';


@IonicPage()
@Component({
  selector: 'page-orgs',
  templateUrl: 'orgs.html',
})
export class OrgsPage {
  orgs: Org[];
  orgsBkp: Org[];
  searchTerm: string;

  constructor(public navCtrl: NavController, public navParams: NavParams, private githubOrgsProvider: GithubOrgsProvider) {
    
    //Load organizations from api
    githubOrgsProvider.load().subscribe(orgs => {
      this.orgs = orgs;
      this.orgsBkp = orgs;
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
      this.githubOrgsProvider.search(this.searchTerm).subscribe(orgs => {
        this.orgs = orgs;
      })
    }
  }

}
