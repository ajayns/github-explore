import { Component } from '@angular/core';
import { IonicPage, PopoverController, NavController, NavParams } from 'ionic-angular';

import { Repo } from '../../models/repo';
import { GithubReposProvider } from '../../providers/github-repos/github-repos';

import { RepoDetailsPage } from '../repo-details/repo-details';
import { PopoverMenuComponent } from '../../components/popover-menu/popover-menu';

@IonicPage()
@Component({
  selector: 'page-repos',
  templateUrl: 'repos.html',
})
export class ReposPage {
  repos: Repo[];
  reposBkp: Repo[];
  searchTerm: string;

  constructor(public navCtrl: NavController, public navParams: NavParams, private githubReposProvider: GithubReposProvider, private popoverCtrl: PopoverController) {

    // Store repos data from api
    githubReposProvider.load().subscribe(repos => {
      this.repos = repos;
      this.reposBkp = repos;
    })
  }

  // Go to repo details
  goToRepo(repoUrl: string) {
    this.navCtrl.push(RepoDetailsPage, {repoUrl});
  }

  // Search for repos
  search(event) {
    if (this.searchTerm.trim() === '') {
      this.repos = this.reposBkp;
    } else {
      this.githubReposProvider.search(this.searchTerm).subscribe(repos => {
        this.repos = repos;
      })
    }
  }

  // Popover control
  presentPopover(ev) {
    let popover = this.popoverCtrl.create(PopoverMenuComponent);
    popover.present({ ev });
  }

}
