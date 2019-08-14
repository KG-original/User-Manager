import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { UsersFormModalComponent } from './../users-form-modal/users-form-modal.component';
//import { Users } from '../shared/users.model';
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

  deleteUser(user) {
    //Update contact first and then update user
    if (confirm('Are you sure you want to delete this user?')) {
      this.httpService.delete('http://localhost:61692/api/ContactDetails/' + user.contactDetails[0].id).subscribe(
        res => {
          this.service.deleteUser(user.name).subscribe(
            res => {
              console.log(res);
              this.toastr.warning('User deleted successfully', 'User Manager');
              this.service.refreshList();
            },
            err => {
              console.log(err);
            }
          );
        },
        err => {
          console.log(err);
        }
      )
    }
  }

  openFormModal(user) {
    if (user) {
      sessionStorage.setItem("CurrentUser", JSON.stringify(user));
      sessionStorage.setItem("Id", JSON.stringify(user.contactDetails[0].id));
    }
    else {
      sessionStorage.removeItem("CurrentUser");
      sessionStorage.removeItem("Id");
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
