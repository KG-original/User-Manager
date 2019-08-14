import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersFormModalComponent } from './users-form-modal.component';

describe('UsersFormModalComponent', () => {
  let component: UsersFormModalComponent;
  let fixture: ComponentFixture<UsersFormModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsersFormModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsersFormModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
