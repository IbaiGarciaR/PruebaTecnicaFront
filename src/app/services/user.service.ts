import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Usuario } from '../models/user.model';

@Injectable({ providedIn: 'root' })
export class UserService {
  private users: Usuario[] = [];

  constructor(private http: HttpClient) {
    this.loadInitialUsers();
  }
  private loadInitialUsers(): void {
    this.users = [
      {
        id: 1,
        tipo: 'Demandante',
        nif: '12345678A',
        nombre: 'Juan',
        primerApellido: 'Pérez',
        direccion: {
          calle: 'Gran Vía',
          numero: '12',
          puerta: '',
          codigopostal: '28013',
          ciudad: 'Madrid'
        },
        estudios: [
          {
            instituto: 'Universidad del Pais Vasco',
            titulacion: 'Ingeniería',
            fecha: '2015'
          }
        ]
      },
      {
        id: 2,
        tipo: 'Empleado',
        nif: '87654321B',
        nombre: 'Ana',
        primerApellido: 'López',
        direccion: {
          calle: 'Diagonal',
          numero: '34',
          puerta: '',
          codigopostal: '08019',
          ciudad: 'Barcelona'
        },
        experiencia: [
          {
            empresa: 'Ibermatica',
            puesto: 'Desarrollador',
            fecha: '2020'
          }
        ]
      }
    ];
  }

  getUsers(): Observable<Usuario[]> {
    return new Observable(observer => {
      observer.next(this.users);
      observer.complete();
    });
  }

  getUserById(id: number): Observable<Usuario> {
    return new Observable(observer => {
      const user = this.users.find(u => u.id === id);
      if (user) observer.next(user);
      observer.complete();
    });
  }

  createUser(user: Usuario): void {
    user.id = this.users.length + 1;
    this.users.push(user);
  }

  updateUser(user: Usuario): void {
    const index = this.users.findIndex(u => u.id === user.id);
    if (index !== -1) this.users[index] = user;
  }

  deleteUser(id: number): void {
    this.users = this.users.filter(u => u.id !== id);
  }
}