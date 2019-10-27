import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { isJSDocCommentContainingNode } from 'typescript';
import { ToolDefinition } from '../../../../models/ToolDefinition';

@Component({
    selector: 'cart-dialog',
    styleUrls: ['./item-dialog.scss', '../../../util/toolModule.scss'],
    templateUrl: 'item-dialog.html',
  })
  export class ItemDialog {
    item: ToolDefinition;
  
    constructor(
      public dialogRef: MatDialogRef<ItemDialog>,
      @Inject(MAT_DIALOG_DATA) public data: any)  {
        this.item = data.item;
      }
  
    onNoClick(): void {
      this.dialogRef.close();
    }

    addToCart(): void {
      this.dialogRef.close("add")
    }
  
  }
