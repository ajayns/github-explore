import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { Org } from '../../models/org';
import { GithubOrgsProvider } from '../../providers/github-orgs/github-orgs';

@IonicPage()
@Component({
  selector: 'page-org-details',
  templateUrl: 'org-details.html',
})
export class OrgDetailsPage {
  orgUrl: string;
  org: Org;

  constructor(public navCtrl: NavController, public navParams: NavParams, private githubOrgsProvider: GithubOrgsProvider) {
    // Get org url from params
    this.orgUrl = this.navParams.get('orgUrl');

    // Get org data
    this.githubOrgsProvider.loadOrg(this.orgUrl).subscribe(org => {
      this.org = org;
    })    
  }



}
