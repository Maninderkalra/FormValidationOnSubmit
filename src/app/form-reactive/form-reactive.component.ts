import { Component, OnInit } from '@angular/core';
import{FormBuilder,FormGroup,Validators} from '@angular/forms'

@Component({
  selector: 'app-form-reactive',
  templateUrl: './form-reactive.component.html',
  styleUrls: ['./form-reactive.component.scss']
})
export class FormReactiveComponent implements OnInit {

  formReactive: FormGroup;

  submitted=false;
  isSubmitted=false;

  constructor(public formBuilder : FormBuilder) { }

  ngOnInit(): void {
    this.formReactive=this.formBuilder.group({
      name:[null,Validators.required],
      email:[null,[Validators.required,Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$')]],
      password:[null,[Validators.required,Validators.minLength(6)]],
    })
  }

  get formControl()
  {
    return this.formReactive.controls;
  }

  onSubmitted()
  {
    this.submitted=true;
    if(this.formReactive.invalid)
    {return}

    this.isSubmitted=true;
  }

}
