import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from "@angular/flex-layout";
import { PipesModule } from '../../pipes/pipes.module';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatIconModule, MatInputModule,	MatAutocompleteModule, MatChipsModule, MatFormFieldModule } from '@angular/material';
import { ToolsComponent } from '../components/tools/tools.component';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';

@NgModule({
    imports: [
    	CommonModule, 
    	HomeRoutingModule, 
		FlexLayoutModule,
		PipesModule,
		MatButtonModule,
		FormsModule,
		ReactiveFormsModule,
		MatIconModule, MatInputModule,
		MatAutocompleteModule,
		MatChipsModule,
		MatFormFieldModule,
		MatCardModule,
		MatDividerModule,
	],
	declarations: [HomeComponent, ToolsComponent],
})
export class HomeModule {}
