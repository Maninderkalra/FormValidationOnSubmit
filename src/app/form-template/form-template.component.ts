import { Component, OnInit } from '@angular/core';
import {Formdetails} from '../formdetails';

@Component({
  selector: 'app-form-template',
  templateUrl: './form-template.component.html',
  styleUrls: ['./form-template.component.scss']
})
export class FormTemplateComponent implements OnInit {
  formDetails = new Formdetails;
  isSubmitted = false;


  constructor() { }

  ngOnInit(): void {
  }

  onSubmit()
  {
    this.isSubmitted= true;
  }

}
