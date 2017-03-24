import { Injectable } from '@angular/core';
import { Http, Headers, Response,URLSearchParams } from '@angular/http';

import 'rxjs/Rx';
import {Observable} from "rxjs/Observable";


@Injectable()
export class HttpService {

  constructor(private http: Http) { }

  sendData(user : any) {
   // const body=JSON.stringify(user);
    const headers= new Headers();
    //const body="nom="+user.nom+"&prenom="+user.prenom+"&dateNaissance="+user.dateNaissance+"&email="+user.email+"&telephone="+user.telephone+"&specialite="+user.specialite+"&note="+user.note+"&dossier="+user.dossier+"&motDePasse="+user.motDepasse+"&active="+user.active+"&cin="+user.cin ;

    headers.append('Content-Type','application/x-www-form-urlencoded');
    // headers.append('Access-Control-Allow-Headers', 'Content-Type');
    headers.append('Access-Control-Allow-Methods', 'POST');
    headers.append('Access-Control-Allow-Origin', '*');
var url='http://localhost:8080/createFormateur';
    let urlSearchParams = new URLSearchParams();
    urlSearchParams.append('nom', user.nom);
    urlSearchParams.append('prenom', user.prenom);
    urlSearchParams.append('dateNaissance', user.dateNaissance);
    urlSearchParams.append('email', user.email);
    urlSearchParams.append('telephone', user.telephone);
    urlSearchParams.append('specialite', user.specialite);
    urlSearchParams.append('note', user.note);
    urlSearchParams.append('dossier', user.dossier);
    urlSearchParams.append('motDePasse', user.motDepasse);
    urlSearchParams.append('active', user.active);
    urlSearchParams.append('cin', user.cin);
    //

    let body = urlSearchParams.toString();
    //noinspection TypeScriptValidateTypes
    return this.http.post(url,body, {headers: headers})
      .map((data: Response) => data.json())
      .catch((error:any) => Observable.throw(error.json().error || 'Server error'));;
  }

}
