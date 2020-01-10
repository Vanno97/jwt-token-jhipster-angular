import { Component } from '@angular/core';
import { UserService } from 'src/service/user.service';
import { LoginDTO } from 'src/dto/logindto';
import { NgForm } from '@angular/forms';
import { UserDTO } from 'src/dto/userDTO';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'provetoken';

  loginDTO: LoginDTO;
  logged: string;
  token: string;

  listUser: UserDTO[];

  constructor(protected service: UserService){
  }

  /**
   * Metodo di login collegato al tag <form>
   * @param f Form di login
   */
  public login(f: NgForm){
    /**
     * Viene costruito l'oggetto loginDTO dal form
     * Viene fatta la chiamata per il login al service e viene salvato il token
     * N.B: per passare il token tra tutto la web application fare cosi:
     *      this.service.login(this.loginDTO).subscribe((token: any) => localStorage.setItem('token',JSON.stringify(token)));
     *      e per leggerlo da un'altra parte fare localStorage.getItem('token');
     * @see UserService
     */
    this.loginDTO = new LoginDTO(f.value.username, f.value.password);
    this.service.login(this.loginDTO).subscribe((token: any) => {this.logged="sei loggatto", this.token = token.id_token});
  }

  /**
   * Metodo per effetuare una chiamata al service passando il token gia salvato
   * @see UserService
   */
  public getAll(){
    this.service.getAll(this.token).subscribe(response => this.listUser = response);
  }
}
