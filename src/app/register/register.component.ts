import { UserService } from "../usuario/user.service";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.css"],
})
export class RegisterComponent implements OnInit {
  formulario: FormGroup;
  isEqual: boolean = false;
  showsError: boolean = true;
  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService
  ) { }

  ngOnInit(): void {
    this.formulario = this.formBuilder.group({
      email: [null, Validators.required],
      email2: [null, [Validators.required]],
      password: [null, Validators.required],
      password2: [null, Validators.required],
      nickname: [null, Validators.required],
      dia: ["1"],
      mes: ["janeiro"],
      ano: ["2000"],
    });
  }
  onSubmit(form) {
    if (form.invalid) {
      return;
    }
    if (form.value.email != form.value.email2) {
      this.isEqual = true;
    } else {
      this.showsError = false;
      this.userService
        .createUser({
          name: form.value.nickname,
          email: form.value.email,
          password: form.value.password,
        })
        .subscribe((data:any) => console.log("success", data));
      this.formulario.reset();
    }
  }
}
