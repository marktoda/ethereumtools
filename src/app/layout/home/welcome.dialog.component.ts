import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material';

@Component({
    selector: 'cart-dialog',
    styleUrls: ['./home.component.scss'],
    templateUrl: 'welcome-dialog.html',
  })
  export class WelcomeDialog {
  
    constructor(
      public dialogRef: MatDialogRef<WelcomeDialog>) {}
  
    onNoClick(): void {
      this.dialogRef.close();
    }
  
  }
