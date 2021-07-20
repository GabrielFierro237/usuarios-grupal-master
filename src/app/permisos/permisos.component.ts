import { ToastrService } from 'ngx-toastr';
import { PermisosService } from '../servicios/permisos.service';
import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';

@Component({
  selector: 'app-permisos',
  templateUrl: './permisos.component.html',
  styleUrls: ['./permisos.component.scss'],
})
export class PermisosComponent implements OnInit {
  permisos: Array<any> = [];
  displayedColumns: string[] = [
    'Nombre',
    'editar',
    'eliminar',
  ];
  pelota: MatTableDataSource<any> = new MatTableDataSource();

  constructor(
    private datos: PermisosService,
    private toastr: ToastrService,
    private router: Router
  ) {
    this.datos.getPermisos().then((traer) => {
      this.pelota = traer.body;
    });
  }

  ngOnInit(): void {
    this.datos.getPermisos().then((data) => {
      this.permisos = data.body;
      console.log(this.permisos);
    });
  }

  eliminaras(ide: string) {
    if (window.confirm('¿Seguro desea borrar este Permiso?')) {
      this.datos.eliminarPermiso(ide).subscribe((data) => {
        window.location.reload();
        this.router.navigateByUrl('/permissions');
      });
    }
  }
}
