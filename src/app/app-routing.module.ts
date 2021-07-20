import { AgregarUsuarioComponent } from './agregar-usuario/agregar-usuario.component';
import { AgrearPermisoComponent } from './agrear-permiso/agrear-permiso.component';
import { AgregarRolComponent } from './agregar-rol/agregar-rol.component';
import { EditarUsuarioComponent } from './editar-usuario/editar-usuario.component';
import { EditarPermisoComponent } from './editar-permiso/editar-permiso.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { PermisosComponent } from './permisos/permisos.component';
import { RolesComponent } from './roles/roles.component'; 
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:'',
    redirectTo: 'users',
    pathMatch: 'full'
  },
  {
    path: 'users',
    component: UsuariosComponent
    
  },
  {
    path: 'permissions',
    component: PermisosComponent
    
  },
  {
    path: 'roles',
    component: RolesComponent
    
  },
  {
    path: 'Insertar',
    component: AgregarUsuarioComponent
  },
  {
    path: 'InsertarPermisos',
    component: AgrearPermisoComponent
  },
  {
    path: 'InsertarRoles',
    component: AgregarRolComponent
  },
  {
    path: 'Editar/:id',
    component: EditarUsuarioComponent
  },
  {
    path: 'EditarPermisos/:id',
    component: EditarPermisoComponent
  },
  {
    path:'**',
    redirectTo:'users'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
