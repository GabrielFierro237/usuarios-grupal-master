import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';
// Material
import {MatTableModule} from '@angular/material/table';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { AgregarUsuarioComponent } from './agregar-usuario/agregar-usuario.component';
import { EditarUsuarioComponent } from './editar-usuario/editar-usuario.component';
import {MatFormFieldModule} from '@angular/material/form-field'; 
import {MatInputModule} from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { PermisosComponent } from './permisos/permisos.component';
import { RolesComponent } from './roles/roles.component';
import { EditarPermisoComponent } from './editar-permiso/editar-permiso.component';
import { AgrearPermisoComponent } from './agrear-permiso/agrear-permiso.component';
import { AgregarRolComponent } from './agregar-rol/agregar-rol.component';
import {MatCheckboxModule} from '@angular/material/checkbox';


@NgModule({
  declarations: [
    AppComponent,
    UsuariosComponent,
    AgregarUsuarioComponent,
    EditarUsuarioComponent,
    PermisosComponent,
    RolesComponent,
    EditarPermisoComponent,
    AgrearPermisoComponent,
    AgregarRolComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatTableModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    HttpClientModule,
    MatCheckboxModule,
    ToastrModule.forRoot()   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
