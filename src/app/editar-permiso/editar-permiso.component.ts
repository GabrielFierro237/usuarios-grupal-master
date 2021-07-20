import { ToastrService } from 'ngx-toastr';
import { LmisPermisos } from '../modelos/lmis-permisos'; 
import { PermisosService } from '../servicios/permisos.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-editar-permiso',
  templateUrl: './editar-permiso.component.html',
  styleUrls: ['./editar-permiso.component.scss'],
})
export class EditarPermisoComponent implements OnInit {
  editarPermiso: LmisPermisos = {
    nombre: ''
  };

  constructor(
    private traer: ActivatedRoute,
    private dato: PermisosService,
    private router: Router,
    private toastr: ToastrService
  ) {
    const id = this.traer.snapshot.params.id;
    console.log(id);

    this.dato.obtenerUnPermiso(id).subscribe((recoger) => {
      this.editarPermiso = recoger.body[0];
      console.log(this.editarPermiso);
    });
  }

  ngOnInit(): void {
    const id = this.traer.snapshot.params.id;
    console.log(id);
  }

  editar(id: any, hibrido: LmisPermisos) {
    var editarPermiso2: LmisPermisos = {
      nombre: hibrido.nombre
    }
    this.dato.editarPermiso(id, editarPermiso2).subscribe((data) => {
      window.location.reload();
    });
  }
}
