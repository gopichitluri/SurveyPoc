import { Component, OnInit, Input,OnChanges,SimpleChanges,ChangeDetectionStrategy } from '@angular/core';
import { FormGroup, FormBuilder, Validators,FormsModule,ReactiveFormsModule  } from '@angular/forms';
import { CommonModule } from '@angular/common';
// import { JsonFormData } from '../IFormQna';
 interface JsonFormValidators {
    min?: number;
    max?: number;
    required?: boolean;
    requiredTrue?: boolean;
    email?: boolean;
    minLength?: boolean;
    maxLength?: boolean;
    pattern?: string;
    nullValidator?: boolean;
  }
   interface JsonFormControlOptions {
    min?: string;
    max?: string;
    step?: string;
    icon?: string;
  }
   interface JsonFormControls {
    name: string;
    label: string;
    value: string;
    type: string;
    options?: JsonFormControlOptions;
    required: boolean;
    validators: JsonFormValidators;
  }
  export interface JsonFormData {
   // controls:any[];
    controls: JsonFormControls[];
  
  }
  
@Component({
    imports:[ReactiveFormsModule,CommonModule],
  selector: 'app-json-form',
  templateUrl: './json-form.component.html',
//   styleUrls: ['./json-form.component.scss'],
  standalone: true
//  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class JsonFormComponent implements OnChanges  {
   // @Input() jsonFormData: JsonFormData[]=[];
    @Input() surveyBind: JsonFormData[]=[];
    @Input() dummygen:string="";

    public myForm: FormGroup = this.fb.group({});
    public surveyForm :JsonFormControls[]=[]
    constructor(private fb: FormBuilder) {

    }
    ngOnChanges(changes: SimpleChanges) {
        console.log(this.dummygen +'from praentt');
        console.log(this.surveyBind[0].controls +"from json comp");
     // if (!changes.jsonFormData.firstChange) {
        this.createForm(this.surveyBind[0].controls);
        this.surveyForm=this.surveyBind[0].controls;
      //}
    }
    createForm(controls: JsonFormControls[]) {
      for (const control of controls) {
        const validatorsToAdd = [];
        for (const [key, value] of Object.entries(control.validators)) {
            console.log(key +"validators Keys...." +value);
          switch (key) {
            case 'min':
              validatorsToAdd.push(Validators.min(value));
              break;
            case 'max':
              validatorsToAdd.push(Validators.max(value));
              break;
            case 'required':
              if (value) {
                validatorsToAdd.push(Validators.required);
              }
              break;
            case 'requiredTrue':
              if (value) {
                validatorsToAdd.push(Validators.requiredTrue);
              }
              break;
            case 'email':
              if (value) {
                validatorsToAdd.push(Validators.email);
              }
              break;
            case 'minLength':
              validatorsToAdd.push(Validators.minLength(value));
              break;
            case 'maxLength':
              validatorsToAdd.push(Validators.maxLength(value));
              break;
            case 'pattern':
              validatorsToAdd.push(Validators.pattern(value));
              break;
            case 'nullValidator':
              if (value) {
                validatorsToAdd.push(Validators.nullValidator);
              }
              break;
            default:
              break;
          }
        }
        this.myForm.addControl(
          control.name,
          this.fb.control(control.value, validatorsToAdd)
        );
      }
    }
    onSubmit() {
      console.log('Form valid: ', this.myForm.valid);
      console.log('Form values: ', this.myForm.value);
    }

}

// import {
