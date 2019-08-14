import { Component, OnInit, Input, EventEmitter } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { FormGroup, FormBuilder, FormControl, Validators, NgForm } from '@angular/forms';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
//import { Observable } from 'rxjs';
//import { Version } from '@angular/core';
import { Users } from '../shared/users.model';
import { UsersService } from '../shared/users.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-users-form-modal',
  templateUrl: './users-form-modal.component.html',
  styleUrls: ['./users-form-modal.component.css']
})

export class UsersFormModalComponent implements OnInit {

  @Input() public user;
  myForm: FormGroup;
  newForm: boolean;

  constructor( private toastr: ToastrService, private service: UsersService, private httpService: HttpClient, public activeModal: NgbActiveModal, private formBuilder: FormBuilder) {
    if (sessionStorage.getItem("CurrentUser"))
      this.newForm = false;
    else
      this.newForm = true;
    this.user = sessionStorage.getItem("CurrentUser") ? JSON.parse(sessionStorage.getItem("CurrentUser")) : {};
    //Check user is new and add contactdetails field for length check in the createform method
    if (!this.user.name) this.user.contactDetails = [];
    this.createForm();
  }

  private createForm() {
      this.myForm = this.formBuilder.group({
        name: this.user ? this.user.name: '',
        surname: this.user ? this.user.surname : '',
        idNumber: this.user ? this.user.idNumber : '',
        passportNumber: this.user ? this.user.passportNumber : '',
        mobileNumber : this.user.contactDetails.length > 0 ? this.user.contactDetails[0].mobileNumber : '',
        emailAddress: this.user.contactDetails.length > 0 ? this.user.contactDetails[0].emailAddress : '',
    });
    if (this.newForm == false) this.myForm.controls['name'].disable();
  }

  public submitForm() {
    this.activeModal.close(this.myForm.value);
    //Create contact object
    let contact = {};
    if (sessionStorage.getItem("Id"))
      contact = { id: Number(sessionStorage.getItem("Id")), mobileNumber: this.myForm.value.mobileNumber, emailAddress: this.myForm.value.emailAddress };
    else
      contact = { mobileNumber: this.myForm.value.mobileNumber, emailAddress: this.myForm.value.emailAddress };
    //Create contactdetail field in user
    this.myForm.value.contactDetails = [];
    //push object into field
    this.myForm.value.contactDetails.push(contact);
    JSON.stringify(this.myForm.value.contactDetails);
    //delete fields as they are not part of original model
    delete this.myForm.value.mobileNumber;
    delete this.myForm.value.emailAddress;

    if (sessionStorage.getItem('CurrentUser')) {
      //disable() somehow removed user field
      this.myForm.value.name = JSON.parse(sessionStorage.getItem('CurrentUser')).name;
      this.UpdateUser(this.myForm.value);
    } else {
      this.AddUser(this.myForm.value);
    }

  }

  checkUserExists(name) {
   var usersList = JSON.parse(sessionStorage.getItem('UsersList'));
    for (var i = 0; i < usersList.length; i++) {
      if (usersList[i].name.toLowerCase() == name.toLowerCase()) {
        return true;
      }
    }
    return false;
  }

  AddUser(user) {
    var userexists = this.checkUserExists(user.name);
    if (userexists) {
      this.toastr.info('User Name Already Exists', 'User Manager');
      this.service.refreshList();
    } else {
      this.service.postUser(user).subscribe(
        res => {
          console.log(res);
          this.toastr.success('User created successfully', 'User Manager');
          this.service.refreshList();
        },
        err => {
          console.log(err);
        }
      )
    }
  }

  UpdateUser(user) {
    //Update contact first and then update user
    this.httpService.put('http://localhost:61692/api/ContactDetails/' + user.contactDetails[0].id, user.contactDetails[0]).subscribe(
    res => {
          this.service.putUser(user).subscribe(
            res => {
              console.log(res);
              this.toastr.info('User updated successfully', 'User Manager');
              this.service.refreshList();
            },
            err => {
              console.log(err);
            }
          )
    },
    err => {
      console.log(err);
    });
  }

  ngOnInit() {
  }

  closeModal() {
    this.activeModal.close('Modal Closed');
  }
}
