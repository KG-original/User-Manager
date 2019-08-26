import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { UsersFormModalComponent } from './../users-form-modal/users-form-modal.component';
import { UsersService } from '../shared/users.service';
import { ToastrService } from 'ngx-toastr';
import { Users } from '../shared/users.model';
import { startsWithPipe } from '../search-filter/search-filter.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})

export class UsersComponent implements OnInit {
  query: string = '';

  constructor(private toastr: ToastrService, private service: UsersService, private httpService: HttpClient, private modalService: NgbModal) { }

  ngOnInit() {
    this.service.refreshList();
  }
  

  openFormModal(user) {
    if (user) {
      localStorage.setItem("CurrentUser", JSON.stringify(user));
      sessionStorage.setItem("ContactId", user.contactDetails[0].id);
      if (user.image.length > 0)sessionStorage.setItem("ImageId", user.image[0].imageId);

    }
    else {
      localStorage.removeItem("CurrentUser");
      sessionStorage.removeItem("ContactId");
      sessionStorage.removeItem("ImageId");
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
