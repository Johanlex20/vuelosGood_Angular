export interface Usuario{
    idUsuario:number;
    usuCreatedAt:string | null;
    usuUpdateAt:string | null;
    rol:Rol;
    idUsuarioData:UsuarioData;
}

export interface UsuarioData{
    idUsuData:number;
    usuName:string;
    usuLastname:string;
    documento:string;
    email:string;
    password:string;
    celular:string;
    imgUsu:string;
    estadoUsu:string;
    idDireccion:Direccion;
    tipoDocumento: TipoDocumento;
}

export interface TipoDocumento{
    idDoc:number;
    nombreDoc:string;
    codigoDoc:string;
    estadoDoc:string;
    descriDoc:string;
    docCreatedAt:string | null;
    docUpdateAt:string | null;
}

export interface Rol{
    idRol:number;
    rol:string;
    descripcion:string;
    estadoRol:string;
    rolCreatedAt:string | null;
    rolUpdateAt:string | null;
    idPermiso:string;
}

export interface Direccion{
    idDireccion:  number;
    direccion:    string;
    codigoPostal: string;
    pais:         string;
    ciudad:       string;
}

export interface UsuarioPage {
    content:          Usuario[];
    pageable:         Pageable;
    last:             boolean;
    totalPages:       number;
    totalElements:    number;
    size:             number;
    number:           number;
    sort:             Sort;
    first:            boolean;
    numberOfElements: number;
    empty:            boolean;
}

export interface Pageable {
    pageNumber: number;
    pageSize:   number;
    sort:       Sort;
    offset:     number;
    paged:      boolean;
    unpaged:    boolean;
}

export interface Sort {
    empty:    boolean;
    sorted:   boolean;
    unsorted: boolean;
}