import { ToastrService } from 'ngx-toastr';
import { RolesService } from '../servicios/roles.service';
import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';

@Component({
  selector: 'app-roles',
  templateUrl: './roles.component.html',
  styleUrls: ['./roles.component.scss'],
})
export class RolesComponent implements OnInit {
  users: Array<any> = [];
  displayedColumns: string[] = [
    'nombre_rol',
    'permisos_ids',
    'editar',
    'eliminar',
  ];
  pelota: MatTableDataSource<any> = new MatTableDataSource();

  constructor(
    private datos: RolesService,
    private toastr: ToastrService,
    private router: Router
  ) {
    this.datos.getRol().then((traer) => {
      this.pelota = traer.body;
    });
  }

  ngOnInit(): void {
    this.datos.getRol().then((data) => {
      this.users = data.body;
      console.log(this.users);
    });
  }

  eliminaras(ide: string) {
    if (window.confirm('¿Seguro desea borrar este Rol?')) {
      this.datos.eliminarRol(ide).subscribe((data) => {
        window.location.reload();
        this.router.navigateByUrl('/users');
      });
    }
  }
}
