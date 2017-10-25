import { Component } from '@angular/core';

import { OrgsPage } from '../orgs/orgs';
import { ReposPage } from '../repos/repos';
import { UsersPage } from '../users/users';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = UsersPage;
  tab2Root = ReposPage;
  tab3Root = OrgsPage;

  constructor() {

  }
}
