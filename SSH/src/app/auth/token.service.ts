import { Injectable } from '@angular/core';

@Injectable()
/**
 *  The class have function GET, SET, RESET to token.
 */
export class TokenService {

    // Get token in LocalStore
  get token() {
    return localStorage.getItem('idt');
  }
    // Insert token in LocalStor
  set token(token: string) {
    localStorage.setItem('idt', token);
  }
    // Reset token in LocalStore
  resetToken() {
    localStorage.removeItem('idt');
  }
}
