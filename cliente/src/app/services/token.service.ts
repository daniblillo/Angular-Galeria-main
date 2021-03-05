import { Injectable } from '@angular/core';

const TOKEN_KEY = 'AuthToken';
const USERNAME_KEY = 'AuthUserName';
const AUTHORITIES_KEY = 'AuthAuthorities';

@Injectable({
  providedIn: 'root'
})

export class TokenService {

  roles: Array<string> = [];

  constructor() { }

/**
 * SET TOKEN
 * @param token
 */
  public setToken(token: string): void {
    window.sessionStorage.removeItem(TOKEN_KEY);
    window.sessionStorage.setItem(TOKEN_KEY, token);
  }

/**
 * SESSION TOKEN
 * @return
 */
  public getToken(): string {
    return sessionStorage.getItem(TOKEN_KEY);
  }

/**
 * EN NOMBRE DE USUARIO
 * @param userName
 */
  public setUserName(userName: string): void {
    window.sessionStorage.removeItem(USERNAME_KEY);
    window.sessionStorage.setItem(USERNAME_KEY, userName);
  }

/**
 * 
 * @return
 */
  public getUserName(): string {
    return sessionStorage.getItem(USERNAME_KEY);
  }

/**
 * AUTORIZACIÓN
 * @param authorities 
 */
  public setAuthorities(authorities: string[]): void {
    window.sessionStorage.removeItem(AUTHORITIES_KEY);
    window.sessionStorage.setItem(AUTHORITIES_KEY, JSON.stringify(authorities));
  }

/**
 * AUTORIZACIÓN
 * @return
 */
  public getAuthorities(): string[] {
    this.roles = [];
    if (sessionStorage.getItem(AUTHORITIES_KEY)) {
      JSON.parse(sessionStorage.getItem(AUTHORITIES_KEY)).forEach(authority => {
        this.roles.push(authority.authority);
      });
    }
    return this.roles;
  }

/**
 * LOGOUT
 */
  public logOut(): void {
    window.sessionStorage.clear();
  }
  
}
