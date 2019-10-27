import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from "@angular/flex-layout";
import { PipesModule } from '../../pipes/pipes.module';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatChipsModule } from '@angular/material/chips';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
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
