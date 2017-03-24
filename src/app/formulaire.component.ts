import { Component } from '@angular/core';
import { HttpService } from './http.service';
@Component({
  selector: 'app-formulaire',
  templateUrl: './formulaire.component.html',
})
export class FormulaireComponent {
  constructor(private httpservice: HttpService) { }
  onSubmit(nom: String, prenom: String, dateNaissance: String, email: String, telephone: String, specialite: String, motDepasse: String, cin: String){
    const user={nom: nom, prenom: prenom, dateNaissance : dateNaissance, email: email,telephone: telephone ,specialite: specialite,note:"aa",dossier:"aaa", motDepasse: motDepasse,active:"2" ,cin: cin};
    this.httpservice.sendData(user)
      .subscribe(data => console.log(data));
  }
}
