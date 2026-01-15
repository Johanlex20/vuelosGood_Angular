export interface Usuario{
    idUsuario:number;
    usuCreatedAt:Date;
    usuUpdateAt:Date;
    rol:Rol;
    IdUsuarioData:UsuarioData;
}

export interface UsuarioData{
    idUsuData:number;
    usuName:String;
    usuLastName:String;
    documento:String;
    email:String;
    password:String;
    celular:String;
    imgUsu:String;
    estadoUsu:String;
    idDireccion:Direccion;
    tipoDocumento: TipoDocumento;
}

export interface TipoDocumento{
    idDoc:number;
    nombreDoc:String;
    codigoDoc:String;
    estadoDoc:String;
    descriDoc:String;
    docCreatedAt:Date;
    docUpdateAt:Date;
}

export interface Rol{
    idRol:number;
    rol:String;
    descripcion:String;
    estadoRol:String;
    rolCreatedAt:Date;
    rolUpdateAt:Date;
    idPermiso:String;
}

export interface Direccion{
    idDireccion:  number;
    direccion:    string;
    codigoPostal: string;
    pais:         string;
    ciudad:       string;
}