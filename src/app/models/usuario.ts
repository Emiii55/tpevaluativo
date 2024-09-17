export interface Usuario {
    uid: string | any; //atributos tipo "any" reciben vacios o indefinidos
    nombre: string;
    apellido: string;
    email: string;
    rol: string;
    password: string;
}
