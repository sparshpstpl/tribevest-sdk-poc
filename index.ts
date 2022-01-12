import axios from 'axios';

export class Pokeapi {

  API_URL: string = 'https://pokeapi.co/api/v2';
  API_KEY: string
  KEY_VALUE: string = '123456';

  constructor(key: string){
    this.API_KEY = key
  }

  validateKey() {
    return new Promise<string|void>((resolve, reject) => {
      if(this.API_KEY === this.KEY_VALUE)
        resolve()
      else
        reject()
    });
  }

  async getPokemonById(id: number): Promise<object> {
    try {
      await this.validateKey();
      return new Promise((resolve, reject) => {
        axios
          .get(`${this.API_URL}/pokemon/${id}`)
          .then((resp) => {
            resolve(resp.data);
          })
          .catch(reject);
      }); 
    } catch (err) {
      throw 'Invalid access key';
    }
  }

  getPokemonTypeById(id: number): Promise<object> {
    try {
      this.validateKey();
      return new Promise((resolve, reject) => {
        axios
          .get(`${this.API_URL}/type/${id}`)
          .then((resp) => {
            resolve(resp.data);
          })
          .catch(reject);
      });
    } catch (err) {
      throw 'Invalid access key';
    }
  }
}
