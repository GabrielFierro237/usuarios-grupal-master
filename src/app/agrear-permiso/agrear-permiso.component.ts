import { PermisosService } from '../servicios/permisos.service';
import { LmisPermisos } from '../modelos/lmis-permisos';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-agrear-permiso',
  templateUrl: './agrear-permiso.component.html',
  styleUrls: ['./agrear-permiso.component.scss'],
})
export class AgrearPermisoComponent implements OnInit {
  agregarPermisos: LmisPermisos = {
    nombre: ''
  };

  constructor(
    private agregar: PermisosService,
    private router: Router,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {}

  guardar(hibrido: LmisPermisos) {
    this.agregar.agregarPermiso(hibrido).subscribe((data) => {
      window.location.reload();
    });
    this.router.navigateByUrl('/permissions');
  }
}
