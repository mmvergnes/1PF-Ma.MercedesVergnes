import { Injectable, OnInit } from "@angular/core";
import { BehaviorSubject, Observable, map, tap } from "rxjs";
import { IUser } from "../../layouts/dashboard/pages/users/models";

@Injectable({ providedIn: 'root' })
export class AuthService implements OnInit {

  private _authUser$ = new BehaviorSubject<IUser | null>(null);

  public authUser$ = this._authUser$.asObservable();

  ngOnDestroy(): void {
    this._authUser$.next(null);
    this._authUser$.complete();
  }

  ngOnInit(): void {
    const obtenerUsuario$ = new Observable<number>((observer) => {
      let counter = 0;
      setInterval(() => {
        counter++;
        observer.next(counter);
      }, 2000);
    });

    const obtenerUserSubscription = obtenerUsuario$
      .pipe(
        tap((value) => {
          console.log('tap 1', value);
        }),
        map((value) => {
          console.log('map', value);
          return value * 2;
        })
      ).subscribe({
        next: (value) => {
          console.log(value);
        },
        error: () => { },
        complete: () => {
          console.log('El usuario se cargo');
        },
      });
  }

  login(): void {
    this._authUser$.next({
      id: 1,
      firstName: 'Mercedes Vergnes',
      lastName: 'Vergnes',
      email: 'mv@gmail.com',
      course: 'Diseño Grafico',
      status: 'Finalizado',
    });
  }

  logout(): void {
    this._authUser$.next(null);
  }
}
