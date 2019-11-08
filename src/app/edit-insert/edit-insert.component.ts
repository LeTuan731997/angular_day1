import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Router } from '@angular/router';
import { ListInsert } from '../list-insert';

@Component({
    selector: 'app-edit-insert',
    templateUrl: './edit-insert.component.html',
    styleUrls: ['./edit-insert.component.css']
})
export class EditInsertComponent implements OnInit {

    routeParams: Params;
    list = JSON.parse(localStorage.getItem("list"));
    listArr: ListInsert[] = localStorage.getItem('list') ? JSON.parse(localStorage.getItem('list')) : [];

    constructor(private route: ActivatedRoute, private router: Router) {

        this.getData();
    }


    ngOnInit() {

    }
    getData() {
        this.route.paramMap.subscribe(params => {
            this.routeParams = params;
        });
        for (let i = 0; i < this.list.length; i++) {
            if (this.list[i].userName === this.routeParams.params.userName) {
                return this.list = this.list[i];
            }
        }
    }
    onSubmit(form) {
        if (!form.controls.age.errors && !form.controls.userName.errors && !form.controls.email.errors) {
            for (let i = 0; i < this.listArr.length; i++) {
                if (this.listArr[i].userName === this.routeParams.params.userName) {
                    this.listArr[i] = this.list;
                    break;
                }
            }
            localStorage.setItem('list', JSON.stringify(this.listArr));
            return this.router.navigate(['/list']);
        }
    }
}
