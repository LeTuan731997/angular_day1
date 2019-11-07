import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-insert',
  templateUrl: './list-insert.component.html',
  styleUrls: ['./list-insert.component.css']
})
export class ListInsertComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  list = JSON.parse(localStorage.getItem("list"))
}
