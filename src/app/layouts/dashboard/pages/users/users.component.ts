import { Component } from '@angular/core';
import { IUser } from './models';
import { MatDialog } from '@angular/material/dialog';
import { ModalUserComponent } from './components/modal-user/modal-user.component';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrl: './users.component.scss'
})
export class UsersComponent {
  displayedColumns: string[] = ['id', 'firstName', 'email', 'course', 'status', 'actions'];

  users: IUser[] = [
    {
      id: 1,
      firstName: 'Juan',
      lastName: 'Perez',
      email: 'jp@email.com',
      course: 'Diseño Grafico',
      status: 'En curso...'
    },
    {
      id: 2,
      firstName: 'Santiago',
      lastName: 'Garcia',
      email: 'sg@email.com',
      course: 'Diseño Grafico',
      status: 'Pendiente'
    },
    {
      id: 3,
      firstName: 'Natalia',
      lastName: 'Gonzalez',
      email: 'ng@email.com',
      course: 'Community Manager',
      status: 'En curso...'
    },
    {
      id: 4,
      firstName: 'Josefina',
      lastName: 'Gomez',
      email: 'jg@email.com',
      course: 'Diseño Grafico',
      status: 'En curso...'
    },
    {
      id: 5,
      firstName: 'Mariano',
      lastName: 'Rodriguez',
      email: 'mr@email.com',
      course: 'Diseño Grafico',
      status: 'En curso...'
    },
    {
      id: 6,
      firstName: 'Cesar',
      lastName: 'Lopez',
      email: 'cl@email.com',
      course: 'Community Manager',
      status: 'Finalizado'
    },
  ];


  userStatus: 'En curso...' | undefined;

  constructor(private matDialog: MatDialog) { }

  openModal(editingUser?: IUser): void {
    this.matDialog
      .open(ModalUserComponent, { data: editingUser, })
      .afterClosed()
      .subscribe({
        next: (result) => {
          if (result) {

            if (editingUser) {
              this.users = this.users.map((u) => u.id === editingUser.id ? { ...u, ...result} : u );

            } else {

              result.id = new Date().getTime().toString().substring(0, 2);
              this.users = [...this.users, result];
            }
          }
        },
      });
  }

  onDeleteUser(id: number): void {
    if (confirm('Seguro desea eliminar este usuario?'))
      this.users = this.users.filter((u) => u.id != id);
  }
}
