import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent implements OnInit {
  title = 'shop';
  public a : String = "";

  logText="Bejelentkezés"

  ngOnInit()  {
    if (localStorage.getItem('user')) {
      this.logText = "Kijelentkezés"
    } else {
      this.logText = "Bejelentkezés"
    }
  }

}
