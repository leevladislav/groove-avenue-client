import * as CryptoJS from 'crypto-js';

export class Crypto {
  // only 32 symbols
  private key = CryptoJS.enc.Hex.parse('0123456789abcdef0123456789abcdef');
  private iv = CryptoJS.enc.Hex.parse('abcdef9876543210abcdef9876543210');

  constructor() {
  }

  // Encrypt
  public encrypt(data) {
    const encrypted = CryptoJS.AES.encrypt(JSON.stringify(data), this.key, {iv: this.iv});

    return encrypted.toString();
  }

  // Decrypt
  public decrypt(data) {
    try {
      const bytes = CryptoJS.AES.decrypt(data, this.key, {iv: this.iv});

      try {
        return JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
      } catch (e) {
        console.error(e);
        return bytes.toString(CryptoJS.enc.Utf8);
      }
    } catch (e) {
      console.error(e);
      return data;
    }
  }
}
