import { Component, OnInit } from '@angular/core';
import { ListInsert } from '../list-insert';
import { Router } from '@angular/router';
import {formatDate} from '@angular/common';

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
        day: "",
        month: "",
        yeal: "",
        err: false,
        birthday:"",
    }
    list: ListInsert[] = localStorage.getItem('list') ? JSON.parse(localStorage.getItem('list')) : [];

    today: number = Date.now();
    constructor(private router: Router) {

    }

    ngOnInit() {

    }

    onSubmit(form) {
        for (let i = 0; i < this.list.length; i++) {
            if (this.list[i].userName === this.contac.userName ) {
                this.contac.err= true;
                break;
            }else{
                this.contac.err= false;
            }
        }
        if(this.contac.day==="" || this.contac.month==="" || this.contac.yeal===""){
            this.contac.birthday = formatDate(new Date(), 'dd/MM/yyyy', 'en');
        }else{
            this.contac.birthday= this.contac.day + '/' + this.contac.month + '/' + this.contac.yeal
        }
        
        if (!form.controls.age.errors && !form.controls.userName.errors && !form.controls.email.errors && this.contac.err ==false) {
            
            this.list.unshift({
                userName: this.contac.userName,
                age: this.contac.age,
                email: this.contac.email,
                birthday: this.contac.birthday,
            });
            localStorage.setItem('list', JSON.stringify(this.list));
            alert("User của người dùng đã được insert");
            return this.router.navigate(['/list']);
        }
    }

}
