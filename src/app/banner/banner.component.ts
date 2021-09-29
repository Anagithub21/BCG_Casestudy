import { Component, OnInit } from '@angular/core';
const USER_INFO = [
  {"name": "John Smith", "occupation": "Advisor", "age": 36},
  {"name": "Muhi Masri", "occupation": "Developer", "age": 28},
  {"name": "Peter Adams", "occupation": "HR", "age": 20},
  {"name": "Lora Bay", "occupation": "Marketing", "age": 43}
];

const USER_SCHEMA = {
  "name": "text",
  "occupation": "text",
  "age": "number",
  "isEdit": "isEdit"
}
@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})

export class BannerComponent implements OnInit {

  displayedColumns: any[] = ['name', 'occupation', 'age', 'isEdit'];
  dataSource = USER_INFO;
  dataSchema:any = USER_SCHEMA;
  constructor() { }

  ngOnInit(): void {
  }

}
