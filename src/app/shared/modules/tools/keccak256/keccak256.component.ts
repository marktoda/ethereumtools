import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { ToolDefinition } from '../../../../models/ToolDefinition';
import { keccak256 } from 'js-sha3';

@Component({
    selector: 'cart-dialog',
    styleUrls: ['./keccak256.scss'],
    templateUrl: 'keccak256.html',
  })
  export class Keccak256Dialog {
    item: ToolDefinition;
    hashInput: string;
    hashResult: string;
  
    constructor(
      public dialogRef: MatDialogRef<Keccak256Dialog>,
      @Inject(MAT_DIALOG_DATA) public data: any)  {
        this.item = data.item;
      }
  
    onNoClick(): void {
      this.dialogRef.close();
    }

    addToCart(): void {
      this.dialogRef.close("add")
    }

    onInputChange(hashInput) {
      this.hashResult = keccak256(hashInput);
      return this.hashResult;
    }
  }
