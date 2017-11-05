import { Component } from '@angular/core';
import { IonicPage, PopoverController, NavController, NavParams } from 'ionic-angular';

import { User } from '../../models/user';
import { GithubUsersProvider } from '../../providers/github-users/github-users';

import { UserDetailsPage } from '../user-details/user-details'; 
import { PopoverMenuComponent } from '../../components/popover-menu/popover-menu';

@IonicPage()
@Component({
  selector: 'page-users',
  templateUrl: 'users.html',
})
export class UsersPage {
  users: User[];
  usersBkp: User[];
  searchTerm: string;
  contentLoaded: boolean;

  constructor(public navCtrl: NavController, public navParams: NavParams, private githubUsersProvider: GithubUsersProvider, private popoverCtrl: PopoverController) {
    this.contentLoaded = false;
    
    // Store users data from api to users
    githubUsersProvider.load().subscribe(users => {
      this.users = users;
      this.usersBkp = users;
      this.contentLoaded = true;
    })
  }

  // Go to user details page
  goToUser(userName: string) {
    this.navCtrl.push(UserDetailsPage,{userName});
  }

  // Search for users
  search(event) {
    if(this.searchTerm.trim() === '') {
      this.users = this.usersBkp;
    } else {
      this.contentLoaded = false;
      this.githubUsersProvider.search(this.searchTerm).subscribe(users => {
        this.users = users;
        this.contentLoaded = true;
      })
    }
  }

  // Popover control
  presentPopover(ev) {
    let popover = this.popoverCtrl.create(PopoverMenuComponent);
    popover.present({ev});
  }

}
