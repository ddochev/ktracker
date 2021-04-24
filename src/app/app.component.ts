import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Kamion tracker';

  constructor( public router: Router) { }


  home(){
    this.router.navigate([ '' ]);
  }

  gmaps(){
    this.router.navigate([ 'gmaps' ]);
  }

  omaps(){
    this.router.navigate([ 'omaps' ]);
  }


  contacts(){
    this.router.navigate([ 'contacts' ]);
  }

  about(){
    this.router.navigate([ 'about' ]);
  }

}



