import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { JsonFormData } from '../json-form/json-form.component';
// import { JsonFormData } from '../IFormQna';
@Component({
    standalone:true,
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  public formData: JsonFormData;
  constructor(private http: HttpClient) {}
  ngOnInit() {
    this.http
      .get('/assets/my-form.json')
      .subscribe((formData: JsonFormData) => {
        this.formData = formData;
      });
  }
}