import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatInputModule, MatButtonModule } from '@angular/material';
import { ReactiveFormsModule } from '@angular/forms';
import { BroadcastTransactionDialog } from './broadcastTransaction.component';
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
    declarations: [BroadcastTransactionDialog],
    exports: [BroadcastTransactionDialog],
    entryComponents: [BroadcastTransactionDialog],
})
export class BroadcastTransactionModule {}
