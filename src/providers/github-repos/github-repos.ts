import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';

import { Repo } from '../../models/repo';


@Injectable()
export class GithubReposProvider {
   // Github API URL
   githubApi = 'https://api.github.com';

  constructor(public http: Http) { }

    // Return random repos
    load(): Observable<Repo[]> {
      return this.http.get(`${this.githubApi}/repositories`)
        .map(res => <Repo[]>res.json());
    }

    loadRepo(repoUrl: string): Observable<Repo> {
      return this.http.get(repoUrl)
        .map(res => <Repo>res.json());
    }

}
