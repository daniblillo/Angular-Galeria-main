import { Component, OnInit } from '@angular/core';
import { TokenService } from '../services/token.service';

/**
 * COMPONENT
 */
@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})

export class IndexComponent implements OnInit {

  isLogged = false;
  nombreUsuario = '';

/**
 * CONSTRUCTOR
 * @param tokenService
 */
  constructor(private tokenService: TokenService) { }

/**
 * GET TOKEN Y USUARIO
 */
  ngOnInit(): void {
    if (this.tokenService.getToken()) {
      this.isLogged = true;
      this.nombreUsuario = this.tokenService.getUserName();
    } else {
      this.isLogged = false;
      this.nombreUsuario = '';
    }
  }

}
