const BigNumber = require('bn.js');

import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ToolDefinition } from '../../../../models/ToolDefinition';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { InfuraService } from '../../../../services/infura.service';
import * as _ from 'lodash';
import { Transaction } from 'ethereumjs-tx';
import * as EthUtil from 'ethereumjs-util';
import * as rlp from 'rlp';
import { keccak256 } from 'js-sha3';

interface TxResult {
  from: string;
  to: string;
  value: string;
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
      // try {
        decoded = new Transaction(this.txInput);

        const jsonTx = {
          nonce: EthUtil.bufferToInt(decoded.nonce),
          gasPrice: EthUtil.bufferToInt(decoded.gasPrice),
          gasLimit: EthUtil.bufferToInt(decoded.gasLimit),
          value: new BigNumber(EthUtil.bufferToHex(decoded.value).slice(2), 16).toString(10),
          data: EthUtil.bufferToHex(decoded.data),
          to: EthUtil.bufferToHex(decoded.to),
          from: this.getSenderAddress(decoded),
          txid: this.getHash(decoded, true),
        };
   
        this.txResult = jsonTx;  
      // } catch (e) {
      //   this.txResult = e.message;
      //   return;
      // }
    }

    // Basically a reimplementation of Ethereumjs-Tx hash()
    // using js-sha3 instead of keccak because keccak throws in browser
    getHash(transaction: Transaction, includeSignature: boolean): string {
      let items;
      if (includeSignature) {
        items = transaction.raw;
      } else {
        // TODO: Check for EIP155
        items = [
          ...transaction.raw.slice(0, 6),
          EthUtil.toBuffer(1), // TODO: Handle multiple chain IDs
          EthUtil.stripZeros(EthUtil.toBuffer(0)),
          EthUtil.stripZeros(EthUtil.toBuffer(0))
        ]
      }
      return '0x' + keccak256(rlp.encode(items));
    }

    // Basically a reimplementation of Ethereumjs-Util getSenderAddress()
    // using js-sha3 instead of keccak because keccak throws in browser
    getSenderAddress(transaction: Transaction): string {
      const { v, r, s } = transaction;
      
      const msgHash = this.getHash(transaction, false);
      const senderPubkey = EthUtil.ecrecover(
        Buffer.from(msgHash.slice(2), 'hex'),
        EthUtil.bufferToInt(v),
        r,
        s,
        1 // TODO: Handle multiple chain IDs
      );
      return EthUtil.bufferToHex(this.publicToAddress(senderPubkey));
    }

    // Basically a reimplementation of Ethereumjs-Util publicToAddress()
    // using js-sha3 instead of keccak because keccak throws in browser
    publicToAddress(pubKey: Buffer): Buffer {
      pubKey = EthUtil.toBuffer(pubKey)
      if (pubKey.length !== 64) {
        throw new Error(`Invalid pubkey length, expected: 64, got: ${pubKey.length}}`)
      }
      // Only take the lower 160bits of the hash
      return Buffer.from(keccak256(pubKey), 'hex').slice(-20);
    
    }
  }
