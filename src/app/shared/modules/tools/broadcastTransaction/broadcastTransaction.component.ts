import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { ToolDefinition } from '../../../../models/ToolDefinition';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { InfuraService } from '../../../../services/infura.service';
import * as _ from 'lodash';

@Component({
    selector: 'cart-dialog',
    styleUrls: ['./broadcastTransaction.scss'],
    templateUrl: 'broadcastTransaction.html',
  })
  export class BroadcastTransactionDialog {
    item: ToolDefinition;
    txInput: string;
    txResult: string;
  
    constructor(
      public dialogRef: MatDialogRef<BroadcastTransactionDialog>,
      private infuraService: InfuraService,
      @Inject(MAT_DIALOG_DATA) public data: any)  {
        this.item = data.item;
      }
  
    onNoClick(): void {
      this.dialogRef.close();
    }

    addToCart(): void {
      this.dialogRef.close("add")
    }

    broadcast(): void {
      this.infuraService.broadcastTransaction(this.txInput, "mainnet")
      .subscribe(
          data => {
              this.txResult = JSON.stringify(data);
              if (!_.isNil(data.error) && !_.isNil(data.error.message)) {
                this.txResult = data.error.message;
              } else if (!_.isNil(data.result)) {
                this.txResult = data.result;
              } else {
                this.txResult = JSON.stringify(data);
              }
  
          }),
          error => {
            this.txResult = JSON.stringify(error);
          }
    }
  }
