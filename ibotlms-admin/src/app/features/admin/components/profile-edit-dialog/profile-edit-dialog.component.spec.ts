import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileEditDialogComponent } from './profile-edit-dialog.component';

describe('ProfileEditDialogComponent', () => {
  let component: ProfileEditDialogComponent;
  let fixture: ComponentFixture<ProfileEditDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProfileEditDialogComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProfileEditDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
