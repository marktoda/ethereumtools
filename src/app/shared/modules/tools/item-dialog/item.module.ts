import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatInputModule, MatButtonModule } from '@angular/material';
import { ReactiveFormsModule } from '@angular/forms';
import { ItemDialog } from './item-dialog.component';

@NgModule({
    imports: [
        CommonModule, 
        RouterModule,
        MatInputModule,
        ReactiveFormsModule,
        MatButtonModule,
    ],
    declarations: [ItemDialog],
    exports: [ItemDialog],
    entryComponents: [ItemDialog],
})
export class ItemDialogModule {}
