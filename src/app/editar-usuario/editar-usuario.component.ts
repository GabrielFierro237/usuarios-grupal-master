import { ToastrService } from 'ngx-toastr';
import { LmisUsuarios } from './../modelos/lmis-usuarios';
import { UsuariosService } from './../servicios/usuarios.service';
import { RolesService } from '../servicios/roles.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-editar-usuario',
  templateUrl: './editar-usuario.component.html',
  styleUrls: ['./editar-usuario.component.scss'],
})
export class EditarUsuarioComponent implements OnInit {
  users: Array<any> = [];
  editarUsuario: LmisUsuarios = {
    primer_nombre: '',
    segundo_nombre: '',
    primer_apellido: '',
    segundo_apellido: '',
    rol: '',
  };

  constructor(
    private traer: ActivatedRoute,
    private dato: UsuariosService,
    private datos: RolesService,
    private router: Router,
    private toastr: ToastrService
  ) {
    const id = this.traer.snapshot.params.id;
    console.log(id);

    this.dato.obtenerUnUsuario(id).subscribe((recoger) => {
      this.editarUsuario = recoger.body[0];
      console.log(this.editarUsuario);
    });
  }

  ngOnInit(): void {
    const id = this.traer.snapshot.params.id;
    console.log(id);
    this.datos.getRol().then((data) => {
      this.users = data.body;
      console.log(this.users);
    });
  }

  editar(id: any, hibrido: LmisUsuarios) {
    var editarUsuario2: LmisUsuarios = {
      primer_nombre: hibrido.primer_nombre,
    segundo_nombre: hibrido.segundo_nombre,
    primer_apellido: hibrido.primer_apellido,
    segundo_apellido: hibrido.segundo_apellido,
    rol: hibrido.rol
    }
    this.dato.editarUsuario(id, editarUsuario2).subscribe((data)  => {
      window.location.reload();
    });
  }
}
