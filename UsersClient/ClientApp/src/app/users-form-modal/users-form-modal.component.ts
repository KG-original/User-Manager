import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { FormGroup, FormBuilder } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { UsersService } from '../shared/users.service';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-users-form-modal',
  templateUrl: './users-form-modal.component.html',
  styleUrls: ['./users-form-modal.component.css'],
})

export class UsersFormModalComponent implements OnInit {

  @Input() public user;
  myForm: FormGroup;
  newForm: boolean;
  ImageUrl: string = "/assets/images/person-placeholder.png";
  ImageName: string;
  fileToUpload: File = null;
  modalTitle: string;
  image: {};
  rootUrl = 'http://localhost:61692/api';

  constructor(private toastr: ToastrService, private service: UsersService, private httpService: HttpClient, public activeModal: NgbActiveModal, private formBuilder: FormBuilder) {
    if (localStorage.getItem("CurrentUser")) {
      this.user = JSON.parse(localStorage.getItem("CurrentUser"));
      this.modalTitle = 'User';
      if (this.user.image.length > 0) {
        this.ImageUrl = this.user.image[0].imageContent;
        this.ImageName = this.user.image[0].imageName;
      }
      this.newForm = false;
    } else {
      this.user = {};
      this.newForm = true;
      this.modalTitle = 'New User';
    }
    if (!this.user.image) this.user.image = [];
    if (!this.user.contactDetails) this.user.contactDetails = [];
    this.createForm();
  }

  deleteUser(user) {
    //Update contact first and then update user
    if (confirm('Are you sure you want to delete this user?')) {
      this.activeModal.close(this.myForm.value);
      this.service.isLoading = true;
      this.httpService.delete(this.rootUrl + '/ContactDetails/' + user.contactDetails[0].id).subscribe(
        res => {
          this.httpService.delete(this.rootUrl + '/Images/' + user.image[0].imageId).subscribe(
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
          );
        },
        err => {
          console.log(err);
        }
      )
    }
  }

  handleFileInput(file: FileList) {
    this.fileToUpload = file.item(0);

    //Show image preview
    var reader = new FileReader();
    reader.onload = (event: any) => {
      this.ImageUrl = event.target.result;
    }
    reader.readAsDataURL(this.fileToUpload);
  }

  private createForm() {
    this.myForm = this.formBuilder.group({
      name: this.user ? this.user.name : '',
      surname: this.user ? this.user.surname : '',
      idNumber: this.user ? this.user.idNumber : '',
      passportNumber: this.user ? this.user.passportNumber : '',
      mobileNumber: this.user.contactDetails.length > 0 ? this.user.contactDetails[0].mobileNumber : '',
      emailAddress: this.user.contactDetails.length > 0 ? this.user.contactDetails[0].emailAddress : '',
      aboutUser: this.user.image.length > 0 ? this.user.image[0].aboutUser : '',
    });
    if (!this.newForm) this.myForm.controls['name'].disable();
  }

  public submitForm() {
    //close modal
    this.activeModal.close(this.myForm.value);

    //create image object
    if (sessionStorage.getItem("ImageId"))
      this.image = { imageId: sessionStorage.getItem("ImageId"), aboutUser: this.myForm.value.aboutUser, imageName: this.fileToUpload ?  this.fileToUpload.name : this.ImageName, imageContent: this.ImageUrl, name: JSON.parse(localStorage.getItem('CurrentUser')).name };
    else
      this.image = { aboutUser: this.myForm.value.aboutUser, imageName: this.fileToUpload.name, imageContent: this.ImageUrl, name: this.myForm.value.name}
    //push into object filed
    this.myForm.value.image = [];
    JSON.stringify(this.image);
    this.myForm.value.image.push(this.image);

    //Create contact object
    let contact = {};
    if (sessionStorage.getItem("ContactId"))
      contact = { id: Number(sessionStorage.getItem("ContactId")), mobileNumber: this.myForm.value.mobileNumber, emailAddress: this.myForm.value.emailAddress };
    else
      contact = { mobileNumber: this.myForm.value.mobileNumber, emailAddress: this.myForm.value.emailAddress };

    //Create contactdetail field in user object
    this.myForm.value.contactDetails = [];

    //push object into field
    JSON.stringify(contact);
    this.myForm.value.contactDetails.push(contact);

    //delete fields as they are not part of original users model
    delete this.myForm.value.mobileNumber;
    delete this.myForm.value.emailAddress;
    delete this.myForm.value.aboutUser;

    if (localStorage.getItem('CurrentUser')) {
      //disable() somehow removed user field
      this.myForm.value.name = JSON.parse(localStorage.getItem('CurrentUser')).name;
      this.UpdateUser(this.myForm.value);
    } else {
      this.AddUser(this.myForm.value);
    }

  }

  checkUserExists(name) {
   var usersList = JSON.parse(sessionStorage.getItem('UsersList'));
    for (var i = 0; i < usersList.length; i++) {
      if (usersList[i].toLowerCase() == name.toLowerCase()) {
        return true;
      }
    }
    return false;
  }

  AddUser(user) {
    var userexists = this.checkUserExists(user.name);
    if (userexists) {
      this.activeModal.close();
      this.toastr.info('User Name Already Exists', 'User Manager');
    } else {
      this.service.isLoading = true;
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
    this.service.isLoading = true;
    this.httpService.put(this.rootUrl + '/ContactDetails/' + user.contactDetails[0].id, user.contactDetails[0]).subscribe(
    res => {
      this.httpService.put(this.rootUrl + '/Images/' + user.image[0].imageId, user.image[0]).subscribe(
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
