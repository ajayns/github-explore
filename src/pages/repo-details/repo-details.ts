import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { Repo } from '../../models/repo';
import { GithubReposProvider } from '../../providers/github-repos/github-repos';

@IonicPage()
@Component({
  selector: 'page-repo-details',
  templateUrl: 'repo-details.html',
})

export class RepoDetailsPage {
  repoUrl: string;
  repo: Repo;

  constructor(public navCtrl: NavController, public navParams: NavParams, private githubReposProvider: GithubReposProvider) {
    // Get repo's url from params
    this.repoUrl = navParams.get('repoUrl');

    // Get repo data
    this.githubReposProvider.loadRepo(this.repoUrl).subscribe(repo => {
      this.repo = repo; 
    })
    
  }


}
