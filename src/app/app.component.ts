import { Component } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { DialogComponent } from './dialog/dialog.component';
import { AuthService } from './Auth/auth.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'DieticianProject';
  constructor(private dialog: MatDialog, public authService: AuthService)
  {

  }
  openDialog() {
    this.dialog.open(DialogComponent, {
      width: '42%',
      height: '580px'
    });
}
}

