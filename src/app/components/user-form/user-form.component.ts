import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from '../../models/user.model';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-user-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss']
})
export class UserFormComponent {
  user: Usuario = {
    id: 0,
    nombre: '',
    tipo: 'Demandante',
    nif: '',
    genero: 'Masculino',
    fechaNac: '',
    direccion: { 
      calle: '',
      numero: '',
      puerta: '',
      codigopostal: '',
      ciudad: ''
    },
    primerApellido: '',
    segundoApellido: '',
  };

  constructor(private router: Router) {}

  onSubmit() {
    console.log('Usuario guardado', this.user);
    this.router.navigate(['/']);
  }

  cancelar() {
    this.router.navigate(['/']);
  }
}
