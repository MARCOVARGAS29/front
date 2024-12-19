import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  
  private userSubject = new BehaviorSubject<any>(null);
  user$ = this.userSubject.asObservable(); // Suscribirse al usuario actual

  private apiUrl = 'https://backe-585f.onrender.com'; // URL base del backend

  constructor(private http: HttpClient) {}

  // Método para iniciar sesión
  login(usuario: { nombre: string, contrasena: string, tipousuario: string }): Observable<any> {
    return this.http.post(`${this.apiUrl}/usuario/login`, usuario);
  }

  // Getter para el usuario actual
  getUsuario() {
    return this.userSubject.asObservable();
  }

  // Método para establecer el usuario actual
  setUsuario(user: any) {
    this.userSubject.next(user);
  }
  
  // Método para registrar un nuevo usuario
  registrarusuario(usuario: { nombre: string; contrasena: string; email: string; numcontacto: number; tipousuario: string }): Observable<any> {
    return this.http.post(`${this.apiUrl}/usuario`, usuario);
  }

  // Método para registrar un nuevo evento
  registrarevento(evento: { nombre: string; tipo_evento: string; descripcion: string; id_usuario: string; id_espacio: string; fecha_evento: string; capacidad_personas: number; hora_inicio: number; hora_fin: number; tipo_pago: string; img_evento: string }): Observable<any> {
    return this.http.post(`${this.apiUrl}/evento`, evento);
  }

  // Método para registrar un nuevo espacio
  registrarespacio(espacio: { nombre: string; ubicacion: string; costo: number }): Observable<any> {
    return this.http.post(`${this.apiUrl}/espacio`, espacio);
  }
}
