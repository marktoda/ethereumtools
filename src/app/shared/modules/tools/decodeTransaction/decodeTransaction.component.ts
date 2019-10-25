import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { ToolDefinition } from '../../../../models/ToolDefinition';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { InfuraService } from '../../../../services/infura.service';
import * as _ from 'lodash';
import { Transaction } from 'ethereumjs-tx';
import * as EthUtil from 'ethereumjs-util';

interface TxResult {
  from: string;
  to: string;
  value: number;
  nonce: number;
  gasPrice: number;
  gasLimit: number;
  data: string;
  txid: string;
}


@Component({
    selector: 'cart-dialog',
    styleUrls: ['./decodeTransaction.scss', '../../../util/toolModule.scss'],
    templateUrl: 'decodeTransaction.html',
  })
  export class DecodeTransactionDialog {
    item: ToolDefinition;
    txInput: string;
    txResult: TxResult;
  
    constructor(
      public dialogRef: MatDialogRef<DecodeTransactionDialog>,
      private infuraService: InfuraService,
      @Inject(MAT_DIALOG_DATA) public data: any)  {
        this.item = data.item;
      }


    decode(): void {
      let decoded;
      try {
        decoded = new Transaction(this.txInput);
        const jsonTx = {
          nonce: EthUtil.bufferToInt(decoded.nonce),
          gasPrice: EthUtil.bufferToInt(decoded.gasPrice),
          gasLimit: EthUtil.bufferToInt(decoded.gasLimit),
          value: EthUtil.bufferToInt(decoded.value),
          data: EthUtil.bufferToHex(decoded.data),
          to: EthUtil.bufferToHex(decoded.to),
          from: EthUtil.bufferToHex(decoded.getSenderAddress()),
          txid: EthUtil.bufferToHex(decoded.hash()),
        };
   
        this.txResult = jsonTx;  
      } catch (e) {
        console.log(e.message);
        this.txResult = e.message;
        return;
      }
    }
  }
