import { Component ,OnInit} from '@angular/core';
import { RouterOutlet } from '@angular/router';
// import { JsonFormData } from '../app/json-form/json-form.component';
import { HttpClient } from '@angular/common/http';
import { JsonFormComponent ,JsonFormData} from '../app/json-form/json-form.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,JsonFormComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  
  public formData: JsonFormData[]=[];
  public dummyinput="sample input details";
  constructor() {}

  ngOnInit() {
    this.formData=formConfig;
    console.log(this.formData[0].controls[0].name +" hhahahah" )
  
  }

}

export const formConfig: JsonFormData[]= [
  {
      controls: [
        {
          name: "Gopi herro",
          label: " what is gopi doing",
          value: "developong",
          type: "text",
          required: true,
          validators:{
            required:true,
            max:7777
          }
      
        },
        {
          name: "test23",
          label: " what is ravi test doing",
          value: "developong",
          type: "text",
          required: true,
          validators:{
            required:true,
            min:779
          }
        }
      ]
  }]


  


//  .get('/assets/my-form.json')