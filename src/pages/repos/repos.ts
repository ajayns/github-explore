import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { Repo } from '../../models/repo';
import { GithubReposProvider } from '../../providers/github-repos/github-repos';


@IonicPage()
@Component({
  selector: 'page-repos',
  templateUrl: 'repos.html',
})
export class ReposPage {
  repos: Repo[];

  constructor(public navCtrl: NavController, public navParams: NavParams, private githubReposProvider: GithubReposProvider) {

    // Store repos data from api
    githubReposProvider.load().subscribe(repos => {
      this.repos = repos;
    })
  }


}
