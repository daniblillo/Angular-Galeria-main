import { Component, OnInit } from '@angular/core';
import { TokenService } from '../services/token.service';

/**
 * COMPONENTE
 */
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  isLogged = false;

/**
 * CONSTRUCTOR
 * @param tokenService 
 */
  constructor(private tokenService: TokenService) { }

/**
 * GET TOKEN
 */
  ngOnInit(): void {
    if (this.tokenService.getToken()) {
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }

/**
 * onLOGOUT
 */
  onLogOut(): void {
    this.tokenService.logOut();
    window.location.reload();
  }

}
