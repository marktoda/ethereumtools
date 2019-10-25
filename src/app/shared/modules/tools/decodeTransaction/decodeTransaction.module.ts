import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatInputModule, MatButtonModule } from '@angular/material';
import { ReactiveFormsModule } from '@angular/forms';
import { DecodeTransactionDialog } from './decodeTransaction.component';
import { FormsModule } from '@angular/forms';

@NgModule({
    imports: [
        CommonModule, 
        RouterModule,
        MatInputModule,
        ReactiveFormsModule,
        MatButtonModule,
        FormsModule
    ],
    declarations: [DecodeTransactionDialog],
    exports: [DecodeTransactionDialog],
    entryComponents: [DecodeTransactionDialog],
})
export class DecodeTransactionDialogModule {}
