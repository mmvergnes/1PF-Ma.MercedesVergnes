import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { IUser } from '../../models';



@Component({
  selector: 'app-modal-user',
  templateUrl: './modal-user.component.html',
  styleUrl: './modal-user.component.scss'
})
export class ModalUserComponent {

  userForm: FormGroup;
  constructor(private formBuilder: FormBuilder, private matDialogRef: MatDialogRef<ModalUserComponent>, @Inject(MAT_DIALOG_DATA) private editingUser?: IUser) {
    this.userForm = this.formBuilder.group({
      firstName: this.formBuilder.control('', [Validators.pattern('^[a-zA-ZÁÉÍÓÚáéíóúñÑ]+$'), Validators.required]),
      lastName: this.formBuilder.control('', [Validators.pattern('^[a-zA-ZÁÉÍÓÚáéíóúñÑ]+$'), Validators.required]),
      email: this.formBuilder.control('', [Validators.pattern('[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,}'), Validators.required]),
      course: this.formBuilder.control('', [Validators.required]),
      status: this.formBuilder.control('', [Validators.required]),
    });

    if (editingUser) {
      this.userForm.patchValue(editingUser);
    }
  }

  get firstNameControl(){
    return this.userForm.get('firstName')
  }


  onSave(): void {
    if (this.userForm.invalid) {
      this.userForm.markAllAsTouched();
    } else {
      this.matDialogRef.close(this.userForm.value)
    }
  };
}
