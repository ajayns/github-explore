import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';

import { Org } from '../../models/org';


@Injectable()
export class GithubOrgsProvider {
  // Github API URL
  githubApi = 'https://api.github.com';

  constructor(public http: Http) { }

  // Return random Orgs
  load(): Observable<Org[]> {
    return this.http.get(`${this.githubApi}/organizations`)
      .map(res => <Org[]>res.json());
  }

  // Return specific Org details
  loadOrg(OrgUrl: string): Observable<Org> {
    return this.http.get(OrgUrl)
      .map(res => <Org>res.json());
  }

  // Search for specific Org
  search(searchTerm: string): Observable<Org[]> {
    return this.http.get(`${this.githubApi}/search/users?q=${searchTerm}+type:org`)
      .map(res => <Org[]>res.json().items);
  }

}