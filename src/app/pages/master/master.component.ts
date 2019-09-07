import { Component, OnInit } from '@angular/core';
import { UserUtil } from 'src/app/utils/user.utils';
import { Message } from 'src/app/models/message.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-master',
  templateUrl: './master.component.html',
  styleUrls: ['./master.component.css']
})
export class MasterComponent implements OnInit {
  public userLogged: boolean = false;

  constructor(
    private route: Router
  ) { }

  ngOnInit() {
    if (UserUtil.get() != null) this.userLogged = true;
  }

  logout() {
    UserUtil.clear();
    this.route.navigate(['login']);
  }
}
