import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit-insert',
  templateUrl: './edit-insert.component.html',
  styleUrls: ['./edit-insert.component.css']
})
export class EditInsertComponent implements OnInit {
  list =JSON.parse(localStorage.getItem("car"));
  constructor() {
  }

  ngOnInit() {
  }
}
