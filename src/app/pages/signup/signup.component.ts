import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { CustomValidator } from 'src/app/validators/custom.validator';
import { Router } from '@angular/router';
import { Result } from 'src/app/models/Result.model';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  public form: FormGroup;

  constructor(
    private fb: FormBuilder,
    private service: AuthenticationService,
    private route: Router
  ) {
    this.form = this.fb.group({
      name: ['', Validators.required],
      email: ['', Validators.compose([Validators.required, CustomValidator.EmailValidator])],
      password: ['', Validators.required],
    });
  }

  ngOnInit() {
  }

  submit() {
    this.service.newRegister(this.form.value)
      .subscribe(
        (res: Result) => {
          alert(res.message);
          this.route.navigate(['login']);
        },
        (err) => {
          alert("Não foi possível realizar o seu cadastro. Tente novamente mais tarde!");
        }
      );
  }
}
