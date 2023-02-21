import { Injectable } from '@angular/core';
import { Http } from '@angular/http'
import 'rxjs/add/operator/map'
// import { map } from 'rxjs/operators';

@Injectable()
export class ProductService {

  private _albumUrl = '../assets/album.json'
  constructor(private _http: Http) { }
  // hahahahahaha
  getAlbum(id: number){
    return this._http.get(this._albumUrl).map(res => res.json())
    // .pipe(map(x => x))
  }
}
