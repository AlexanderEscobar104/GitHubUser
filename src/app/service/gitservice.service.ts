import { Injectable } from '@angular/core';
import { Gituser } from '../models/gituser';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environments';

@Injectable({
  providedIn: 'root'
})
export class Gitservice {

   //url conexion a backend
   urlApi= environment.conexionApi;

   constructor(private http:HttpClient) { }
 
   //metodo para traer el usuario
   getUser(user: string){
    console.log("##1", this.urlApi+user)
     return this.http.get<Gituser>(this.urlApi+user)
   }
}
