import { PopupContentComponent } from '../popup-content/popup-content.component';
import { MatDialogRef } from '@angular/material';
import { Router } from '@angular/router';
import { NavigationEnd } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router, private dialog: MatDialog) { }

  ngOnInit() {
  }

  AbrePopup(){
    
    console.log('carrega popup')
    
    const dialogConfig = new MatDialogConfig();
    
    dialogConfig.autoFocus = true;
    dialogConfig.width = '500px';

    this.dialog.open(PopupContentComponent, dialogConfig);

  }
  
  carregaQuestionario(){    
    
    this.router.navigate(['/questionario'])

  }



}