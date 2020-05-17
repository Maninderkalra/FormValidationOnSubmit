import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { FormTemplateComponent } from '../form-template/form-template.component';
import { FormReactiveComponent } from '../form-reactive/form-reactive.component';

const appRoute:Routes=[
  {path:'',pathMatch:'full',redirectTo:'template'},
  {path:'template',component:FormTemplateComponent},
  {path:'reactive',component:FormReactiveComponent}
]

@NgModule({
  declarations: [
    FormTemplateComponent,
    FormReactiveComponent
  ],
  imports: [
    CommonModule,
    FormsModule,ReactiveFormsModule,
    RouterModule.forRoot(appRoute)
  ],
  exports:[
    RouterModule
  ]
})
export class AppRouteModule { }
