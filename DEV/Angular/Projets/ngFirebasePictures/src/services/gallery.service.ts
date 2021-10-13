import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class GalleryService {
  identNum: number=0;
  constructor(private httpClient: HttpClient) {
  }
  search(ident:string, motCle:string, nbParPage:number, numPage:number) {
    //console.log("Ident : " + ident);
    const urldef="https://pixabay.com/api/";
    if (this.isIdentGood(ident)) {
      //const cle="23803352-3deb5045cf15c0d03df4a098b";
      const cle=(415+this.identNum)+"3352-3deb5045cf15c0d03df4a098b";
      const urlstr=urldef +
      "?key="+ cle +
      "&q="+ motCle +
      "&per_page=" + nbParPage +
      "&page=" + numPage +
      "&image_type=photo&pretty=true";
      //console.log("Url : " + urlstr);

      // Ne plus utiliser map((response: any) => response.json()) depuis angular 4
      return this.httpClient.get(urlstr).pipe(map((response: any) => response));
    }
    return this.httpClient.get(urldef);
  }

  isIdentGood(ident:string) {
    if (this.identNum==1965) {
      ident=""+this.identNum;
      return true;
    }
    if (ident=="1965") {
      this.identNum=Number(ident);
      return true;
    }
    return false;
  }
}
