import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { UserDTO } from 'src/dto/userDTO';
import { Observable } from 'rxjs';
import { LoginDTO } from 'src/dto/logindto';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(protected http: HttpClient) { }

  /**
   * Metodo utilizzato per fare il login e farsi restituire il token di autenticazione
   * @param loginDTO Oggetto in cui sono salvati username e password per effetuare il login
   */
  login(loginDTO: LoginDTO): Observable<any> {
    return this.http.post<any>('http://localhost:8080/api/authenticate',loginDTO);
  }

  /**
   * Metodo per effetuare una chiamata http.
   * Questo metodo specifico far una get di tutti gli utenti
   * In ingresso vuole il token di autenticazione che viene restituito da metodo sopra
   * @param token Token di autenticazione
   */
  getAll(token: string): Observable<UserDTO[]> {
    /**
     * Qui viene inserito il path della chiamata e come secondo paramentro il token di autenticazione inserito
     * nell'header della chiamata http
     */
    return this.http.get<UserDTO[]>('http://localhost:8080/api/users',{
      headers: {
        Authorization : ('Bearer ' + token)
      }
    });
  }
}
