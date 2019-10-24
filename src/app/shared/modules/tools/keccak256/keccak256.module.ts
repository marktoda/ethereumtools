import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatInputModule, MatButtonModule } from '@angular/material';
import { ReactiveFormsModule } from '@angular/forms';
import { Keccak256Dialog } from './keccak256.component';
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
    declarations: [Keccak256Dialog],
    exports: [Keccak256Dialog],
    entryComponents: [Keccak256Dialog],
})
export class Keccak256Module {}
