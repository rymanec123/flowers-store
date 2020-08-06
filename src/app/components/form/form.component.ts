import {Component, Input, OnInit} from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
// import { UserService } from '@app/services/user/user.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  @Input()
  id: string;
  signInForm: FormGroup;
  // userService: UserService;

  constructor(
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.signInForm = this.formBuilder.group({
      telephone: [null, [Validators.required, Validators.pattern(/^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?$/)]],
      login: [null, [Validators.required]]
    });
  }

  onSignInSubmit(event: Event) {
    event.preventDefault();

    if(!this.signInForm.valid) {
      return;
    }
    //  this.userService.user.next({login: this.signInForm.value.login})

    console.log(this.signInForm.value);
  }
}
