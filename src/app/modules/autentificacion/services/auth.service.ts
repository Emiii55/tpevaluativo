import { Injectable } from '@angular/core';
// Servicio en la nube de autentificacion de Firebase
import { AngularFireAuth } from "@angular/fire/compat/auth";
// Accedemos directamente al servicio Firestore
import { AngularFirestore } from "@angular/fire/compat/firestore";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  //referenciar auth de firebase en el servicio y ServicioFirestore
  constructor(
    private auth: AngularFireAuth,
    private servicioFirestore: AngularFirestore
  ) { }

  // funcion para registro
  registrar(email: string, password: string){
    //retorna el valor que es creado con el metodo "createEmail.."
    return this.auth.createUserWithEmailAndPassword(email,password);
  }

  //funcion para inicio de sesion
  iniciarSesion(email: string, password: string){
    //validar la informacion del usuario -> saber si existe en la coleccion
    return this.auth.signInWithEmailAndPassword(email, password);
  }

  //funcion para cerrar sesion
  cerrarSesion(){
    //devuelve una promesa vacia -> quita token
    return this.auth.signOut();
  }

  //funcion para tomar el uid
  async obtenerUid(){
    //nos va a generar una promesa y la constante la va a capturar
    const user = await this.auth.currentUser;

    /*
    si el usuario no respeta la estructura de la interfaz o 
    tuvo problemas para el registro -> ej: mal internet
    */

    if (user == null){
      return null;
    }
    else{
      return user.uid;
    }
  }

  obtenerUsuario(email: string){
    /*
     * Retornamos del servicioFirestore la colección de 'usuarios', buscamos una referencia en los email registrados
     * y los comparamos con los que ingrese el usuario al iniciar sesión, y lo obtiene con el '.get()'
     * Lo vuelve una promesa => da un resultado RESUELTO o RECHAZADO
     */
    return this.servicioFirestore.collection('usuarios', ref => ref.where('email', '==', email)).get().toPromise();
  }

}
