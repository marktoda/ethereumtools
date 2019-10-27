import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
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
