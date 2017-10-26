import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { User } from '../../models/user';
import { GithubUsersProvider } from '../../providers/github-users/github-users';


@IonicPage()
@Component({
  selector: 'page-user-details',
  templateUrl: 'user-details.html',
})
export class UserDetailsPage {
  userName: string;
  user: User;

  constructor(public navCtrl: NavController, public navParams: NavParams, private githubUsersProvider: GithubUsersProvider) {
    this.userName = navParams.get('userName');
    this.githubUsersProvider.loadUser(this.userName).subscribe(user => {
      this.user = user;
    })
  }

}
