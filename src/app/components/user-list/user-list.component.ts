import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from '../../models/user.model';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent {
  users: Usuario[] = [
    {
      id: 1,
      tipo: 'Demandante',
      nif: '12345678A',
      nombre: 'Juan Pérez',
      primerApellido: 'Pérez',
      segundoApellido: 'Gómez',
      genero: 'Masculino',
      fechaNac: '1990-01-01',
      direccion: {
        calle: 'Calle Falsa 123',
        numero: '1',
        puerta: 'A',
        codigopostal: '01001',
        ciudad: 'Vitoria'
      },
      estudios: [
        {
          instituto: 'Universidad del Pais Vasco',
          titulacion: 'Licenciado',
          fecha: '2012-05-15'
        }
      ]
    },
    {
      id: 2,
      tipo: 'Empleado',
      nif: '23456789B',
      nombre: 'María López',
      primerApellido: 'López',
      genero: 'Femenino',
      fechaNac: '1985-02-20',
      direccion: {
        calle: 'Avenida Principal 456',
        numero: '5',
        puerta: 'B',
        codigopostal: '48001',
        ciudad: 'Bilbao'
      },
      experiencia: [
        {
          empresa: 'Ibermatica',
          puesto: 'Desarrolladora',
          fecha: '2018-01-01'
        }
      ]
    }
  ];

  tipoFiltro: 'all' | 'demandante' | 'empleado' = 'all';

  constructor(private router: Router) {}

  filterUsers() {
    if (this.tipoFiltro === 'all') {
      return this.users;
    }
    return this.users.filter(user => user.tipo.toLowerCase() === this.tipoFiltro);
  }

  verUsuario(id: string) {
    this.router.navigate(['/user', id]);
  }

  editarUsuario(id: string) {
    this.router.navigate(['/user/edit', id]);
  }

  borrarUsuario(id: number) {
    if (confirm(`¿Está seguro de que desea borrar el usuario ${this.users.find(user => user.id === id)?.nombre}?`)) {
      this.users = this.users.filter(user => user.id !== id);
    }
  }

  nuevoUsuario() {
    this.router.navigate(['/user/new']);
  }
}
