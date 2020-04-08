import { FormsModule, NgForm } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cadatro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {
  isEqual: boolean = true
  showsError: boolean = true
  onSubmit(form: NgForm) {
    if (form.value.email != form.value.email2) {
      this.isEqual = false
    } else {      
      this.showsError = false
      form.reset()
    }
  }

  constructor() { }

  ngOnInit(): void {
  }

}
