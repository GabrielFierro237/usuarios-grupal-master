import { RolesService } from '../servicios/roles.service'; 
import { PermisosService } from '../servicios/permisos.service';
import { LmisPermisos } from '../modelos/lmis-permisos';
import { LmisRoles } from '../modelos/lmis-roles'; 
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-agregar-rol',
  templateUrl: './agregar-rol.component.html',
  styleUrls: ['./agregar-rol.component.scss']
})
export class AgregarRolComponent implements OnInit {
  permisos: Array<any> = [];
  agregarRol: LmisRoles = {
    nombre_rol: '',
    permisos_ids: [],
  };

  constructor(
    private agregar: RolesService,
    private datos: PermisosService,
    private router: Router,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    this.datos.getPermisos().then((data) => {
      this.permisos = data.body;
      console.log(this.permisos);
    });
  }

  guardar(hibrido: LmisRoles) {
    var agregarRol2: LmisRoles = {
      nombre_rol: hibrido.nombre_rol,
      permisos_ids: hibrido.permisos_ids,
    }
    this.agregar.agregarRol(agregarRol2).subscribe((data) => {
      //window.location.reload();
    });
    console.log(this.agregar);
    this.router.navigateByUrl('/roles');
  }

}
