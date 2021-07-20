import { UsuariosService } from './../servicios/usuarios.service';
import { RolesService } from '../servicios/roles.service';
import { LmisUsuarios } from './../modelos/lmis-usuarios';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-agregar-usuario',
  templateUrl: './agregar-usuario.component.html',
  styleUrls: ['./agregar-usuario.component.scss'],
})
export class AgregarUsuarioComponent implements OnInit {
  users: Array<any> = [];
  agregarUsuario: LmisUsuarios = {
    primer_nombre: '',
    segundo_nombre: '',
    primer_apellido: '',
    segundo_apellido: '',
    rol: ''
  };

  constructor(
    private agregar: UsuariosService,
    private datos: RolesService,
    private router: Router,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    this.datos.getRol().then((data) => {
      this.users = data.body;
      console.log(this.users);
    });
  }

  guardar(hibrido: LmisUsuarios) {
    this.agregar.agregarUsuario(hibrido).subscribe((data) => {
      window.location.reload();
    });
    this.router.navigateByUrl('/users');
  }
}
