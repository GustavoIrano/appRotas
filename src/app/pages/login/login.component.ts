import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators, EmailValidator } from '@angular/forms';
import { CustomValidator } from 'src/app/validators/custom.validator';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { User } from 'src/app/models/user.model';
import { UserUtil } from 'src/app/utils/user.utils';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public form: FormGroup;

  constructor(
    private service: AuthenticationService,
    private route: Router,
    private fb: FormBuilder
  ) {
    this.form = this.fb.group({
      email: ['', Validators.compose([Validators.required, CustomValidator.EmailValidator])],
      password: ['', Validators.required]
    });
  }

  ngOnInit() {
  }

  login() {
    this.service.authenticate(this.form.value)
      .subscribe(
        (res: User) => {
          UserUtil.save(res);
          this.route.navigate(['']);
        }
      );
  }
}
