export interface LmisUsuarios {
    _id?: string,
    primer_nombre: string,
    segundo_nombre: string,
    primer_apellido: string,
    segundo_apellido: string,
    codigo_acceso?: string,
    password?: string,
    rol?: string,
    nuevo_usuario?: boolean
}
