import {Injectable} from '@angular/core';
import {Crypto} from '../crypto';

@Injectable({
  providedIn: 'root'
})
export class CryptoService extends Crypto {
  constructor() {
    super();
  }
}
