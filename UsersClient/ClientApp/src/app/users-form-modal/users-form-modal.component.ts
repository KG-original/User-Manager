import { Component, OnInit, Input, EventEmitter } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { FormGroup, FormBuilder, FormControl, Validators, NgForm } from '@angular/forms';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { UsersService } from '../shared/users.service';
import { ToastrService } from 'ngx-toastr';
import { UploadImageService} from '../shared/upload-image.service'


@Component({
  selector: 'app-users-form-modal',
  templateUrl: './users-form-modal.component.html',
  styleUrls: ['./users-form-modal.component.css'],
  providers: [UploadImageService]
})

export class UsersFormModalComponent implements OnInit {

  @Input() public user;
  myForm: FormGroup;
  newForm: boolean;
  ImageUrl: string = "/assets/images/person-placeholder.png";
  ImageBytes;
  fileToUpload: File = null;
  modalTitle: string;
  image: {};

  constructor( private imageService: UploadImageService, private toastr: ToastrService, private service: UsersService, private httpService: HttpClient, public activeModal: NgbActiveModal, private formBuilder: FormBuilder) {
    if (sessionStorage.getItem("CurrentUser"))
      this.newForm = false;
    else
      this.newForm = true;
    this.user = sessionStorage.getItem("CurrentUser") ? JSON.parse(sessionStorage.getItem("CurrentUser")) : {};
    this.modalTitle = this.user.name ? 'User' : 'New User';
    //Check user is new and add contactdetails field for length check in the createform method
    if (!this.user.name) {
      this.user.contactDetails = [];
      this.user.image = [];
    };
    this.createForm();
  }

  deleteUser(user) {
    //Update contact first and then update user
    if (confirm('Are you sure you want to delete this user?')) {
      this.activeModal.close(this.myForm.value);
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

  handleFileInput(file: FileList) {
    this.fileToUpload = file.item(0);

    //Show image preview
    var reader = new FileReader();
    reader.onload = (event: any) => {
      this.ImageUrl = event.target.result;
      //Convert image to bytes
      this.ImageBytes = this.convertDataURIToBinary(this.ImageUrl);
    }
    reader.readAsDataURL(this.fileToUpload);
  }

  private convertDataURIToBinary(dataURI) {
    var BASE64_MARKER = ';base64,';
    var base64Index = dataURI.indexOf(BASE64_MARKER) + BASE64_MARKER.length;
    var base64 = dataURI.substring(base64Index);
    var raw = window.atob(base64);
    var rawLength = raw.length;
    var array = new Uint8Array(new ArrayBuffer(rawLength));

    for (let i = 0; i < rawLength; i++) {
      array[i] = raw.charCodeAt(i);
    }
    return array;
  }

  private createForm() {
    this.myForm = this.formBuilder.group({
      name: this.user ? this.user.name : '',
      surname: this.user ? this.user.surname : '',
      idNumber: this.user ? this.user.idNumber : '',
      passportNumber: this.user ? this.user.passportNumber : '',
      mobileNumber: this.user.contactDetails.length > 0 ? this.user.contactDetails[0].mobileNumber : '',
      emailAddress: this.user.contactDetails.length > 0 ? this.user.contactDetails[0].emailAddress : '',
      aboutUser: this.user.aboutUser ? this.user.aboutUser : '',
      image: this.user.image > 0 ? this.user.image : null,
    });
    if (this.newForm == false) this.myForm.controls['name'].disable();
  }

  public submitForm() {
    //close modal
    this.activeModal.close(this.myForm.value);

    //create image object
    this.image = { aboutUser: this.myForm.value.aboutUser, imageName: this.myForm.value.image, imageContent: this.ImageBytes, name: this.myForm.value.name };
    //push into object filed
    this.myForm.value.image = [];
    this.myForm.value.image.push(this.image);
    JSON.stringify(this.myForm.value.image);

    //Create contact object
    let contact = {};
    if (sessionStorage.getItem("ContactId"))
      contact = { id: Number(sessionStorage.getItem("ContactId")), mobileNumber: this.myForm.value.mobileNumber, emailAddress: this.myForm.value.emailAddress };
    else
      contact = { mobileNumber: this.myForm.value.mobileNumber, emailAddress: this.myForm.value.emailAddress };

    //Create contactdetail field in user object
    this.myForm.value.contactDetails = [];

    //push object into field
    this.myForm.value.contactDetails.push(contact);
    JSON.stringify(this.myForm.value.contactDetails);

    //delete fields as they are not part of original users model
    delete this.myForm.value.mobileNumber;
    delete this.myForm.value.emailAddress;
    delete this.myForm.value.aboutUser;

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
