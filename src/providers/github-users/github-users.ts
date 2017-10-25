import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';

import { User } from '../../models/user'


@Injectable()
export class GithubUsersProvider {
  // Github API URL
  githubApi = 'https://api.github.com';

  constructor(public http: Http) {  }

  // Return random users
  load(): Observable<User[]> {
    return this.http.get(`${this.githubApi}/users`)
      .map(res => <User[]>res.json());
  }


}
