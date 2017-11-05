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
  contentLoaded: boolean;

  constructor(public navCtrl: NavController, public navParams: NavParams, private githubReposProvider: GithubReposProvider, private popoverCtrl: PopoverController) {
    this.contentLoaded = false;

    // Store repos data from api
    githubReposProvider.load().subscribe(repos => {
      this.repos = repos;
      this.reposBkp = repos;
      this.contentLoaded = true;
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
      this.contentLoaded = false;
      this.githubReposProvider.search(this.searchTerm).subscribe(repos => {
        this.repos = repos;
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
