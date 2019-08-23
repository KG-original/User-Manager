import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { UsersFormModalComponent } from './../users-form-modal/users-form-modal.component';
import { UsersService } from '../shared/users.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  constructor(private toastr: ToastrService, private service: UsersService, private httpService: HttpClient, private modalService: NgbModal) { }

  ngOnInit() {
    this.service.refreshList();
  }

  

  openFormModal(user) {
    if (user) {
      sessionStorage.setItem("CurrentUser", JSON.stringify(user));
      sessionStorage.setItem("ContactId", JSON.stringify(user.contactDetails[0].id));

    }
    else {
      sessionStorage.removeItem("CurrentUser");
      sessionStorage.removeItem("ContactId");

    }
      
    const modalRef = this.modalService.open(UsersFormModalComponent);
    modalRef.componentInstance.user = user;
    

    modalRef.result.then((result) => {
      console.log(result);
    }).catch((error) => {
      console.log(error);
    });
  }
 

}
