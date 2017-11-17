import { Component , OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  ngOnInit(){
    firebase.initializeApp({
      apiKey: "AIzaSyD2jYmVOBQQy5kDvJfHyFkfvUGxq36hPGI",
      authDomain: "ng4-complete-guide-98efc.firebaseapp.com"
    });
  }
}
