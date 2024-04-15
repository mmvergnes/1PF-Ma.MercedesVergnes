import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { UsersComponent } from './users.component';

import { ModalUserComponent } from './components/modal-user/modal-user.component';

import { SharedModule } from '../../../../shared/shared.module';

@NgModule({
  declarations: [
    UsersComponent,
    ModalUserComponent
  ],
  imports: [
    CommonModule,
    UsersRoutingModule,
    SharedModule
  ],
  exports: [
    UsersComponent
  ]
})
export class UsersModule { }
