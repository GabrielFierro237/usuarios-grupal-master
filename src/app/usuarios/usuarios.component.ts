import { ToastrService } from 'ngx-toastr';
import { UsuariosService } from './../servicios/usuarios.service';
import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.scss'],
})
export class UsuariosComponent implements OnInit {
  users: Array<any> = [];
  displayedColumns: string[] = [
    '1_Nombre',
    '2_Nombre',
    '1_Apellido',
    '2_Apellido',
    'rol',
    'Nuevo_usuario',
    'editar',
    'eliminar',
  ];
  pelota: MatTableDataSource<any> = new MatTableDataSource();

  constructor(
    private datos: UsuariosService,
    private toastr: ToastrService,
    private router: Router
  ) {
    this.datos.getUsuarios().then((traer) => {
      this.pelota = traer.body;
    });
  }

  ngOnInit(): void {
    this.datos.getUsuarios().then((data) => {
      this.users = data.body;
      console.log(this.users);
    });
  }

  eliminaras(ide: string) {
    if (window.confirm('¿Seguro desea borrar este Usuario?')) {
      this.datos.eliminarUsuario(ide).subscribe((data) => {
        window.location.reload();
        this.router.navigateByUrl('/users');
      });
    }
  }
}
