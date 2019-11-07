import { Component, OnInit } from '@angular/core';
import { ListInsert } from '../list-insert';
import {Router} from '@angular/router';

@Component({
  selector: 'app-insert',
  templateUrl: './insert.component.html',
  styleUrls: ['./insert.component.css']
})

export class InsertComponent implements OnInit {
  contac = {
    userName: "",
    email: "",
    age: "",
    day:"",
    month:"",
    yeal:"",
  }
  list: ListInsert[] = localStorage.getItem('list')?JSON.parse(localStorage.getItem('list')):[];
  
  today: number = Date.now();
  constructor(private router: Router) { 

  }

  ngOnInit() {
    
  }

  onSubmit(form){
    console.log(this.list);
    // localStorage.removeItem('list');
    if(!form.controls.age.errors && !form.controls.userName.errors && !form.controls.email.errors){
      this.list.unshift({
          userName: this.contac.userName,
          age: this.contac.age,
          email: this.contac.email,
          birthday: this.contac.day+'/'+this.contac.month+'/'+this.contac.yeal,
      });
      localStorage.setItem('list', JSON.stringify(this.list));
      alert("User của người dùng đã được insert");
      return  this.router.navigate(['/list']);
    }
  }

}
