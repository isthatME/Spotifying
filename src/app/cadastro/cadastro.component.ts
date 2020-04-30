import { FormsModule,FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cadatro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {
  formulario: FormGroup;
  isEqual: boolean = true;
  showsError: boolean = true  
  constructor(private formBuilder: FormBuilder) { }
  
  ngOnInit(): void {
    
    this.formulario = this.formBuilder.group({
      email: [null,Validators.required],
      email2: [null,[Validators.required,Validators.email]],
      password:[null,Validators.required],
      password2:[null,Validators.required],
      nickname:[null,Validators.required],
      dia:['1',Validators.required],
      mes:['janeiro',Validators.required],
      ano:['2000',Validators.required]
    })
  }
  onSubmit(form) {
    if(this.formulario.value.email != this.formulario.value.email2){
      this.isEqual = false
    }else {
      this.showsError = false
      this.formulario.reset()
    }
  }
}



// isEqual: boolean = true
// showsError: boolean = true
// onSubmit(form: NgForm) {
//   if (form.value.email != form.value.email2) {
//     this.isEqual = false
//   } else {      
//     this.showsError = false
//     form.reset()
//   }
// }








