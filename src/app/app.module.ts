import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { HttpModule } from '@angular/http';

import { OrgsPage } from '../pages/orgs/orgs';
import { ReposPage } from '../pages/repos/repos';
import { UsersPage } from '../pages/users/users';
import { TabsPage } from '../pages/tabs/tabs';
import { UserDetailsPage } from '../pages/user-details/user-details';
import { RepoDetailsPage } from '../pages/repo-details/repo-details';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { GithubUsersProvider } from '../providers/github-users/github-users';
import { GithubReposProvider } from '../providers/github-repos/github-repos';

@NgModule({
  declarations: [
    MyApp,
    OrgsPage,
    ReposPage,
    UsersPage,
    TabsPage,
    UserDetailsPage,
    RepoDetailsPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    OrgsPage,
    ReposPage,
    UsersPage,
    TabsPage,
    UserDetailsPage,
    RepoDetailsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    GithubUsersProvider,
    GithubReposProvider
  ]
})
export class AppModule {}
