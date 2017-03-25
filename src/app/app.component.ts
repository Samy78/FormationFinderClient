import { Component } from '@angular/core';
import { HttpService } from "./http.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  providers: [ HttpService ]
})
export class AppComponent {
  constructor(private httpservice: HttpService) { }



  onSubmit2(nom: String, prenom: String, dateNaissance: String, email: String, telephone: String, specialite: String, motDepasse: String, cin: String)
  {
    console.log(nom);
  }
}
