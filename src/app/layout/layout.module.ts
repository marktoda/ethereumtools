import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { MatSelectModule } from '@angular/material/select';
import { MatBadgeModule } from '@angular/material/badge';
import { MatIconModule } from '@angular/material/icon';
import { PipesModule } from '../pipes/pipes.module';
import { ToolService } from '../services/tool.service';
import { MatDividerModule } from '@angular/material/divider';
import { LayoutRoutingModule } from './layout-routing.module';
import { LayoutComponent } from './layout.component';
import { MatButtonModule } from '@angular/material/button';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatDialogModule } from '@angular/material/dialog';
import { WelcomeDialog } from './home/welcome.dialog.component';

@NgModule({
    imports: [
        CommonModule,
        LayoutRoutingModule,
        TranslateModule,
        NgbDropdownModule.forRoot(),
        MatSelectModule,
        MatBadgeModule,
        MatIconModule,
        PipesModule,
        MatDividerModule,
        MatButtonModule,
        MatSnackBarModule,
        MatDialogModule,
    ],
    providers: [ToolService],
    declarations: [LayoutComponent, HeaderComponent, FooterComponent, WelcomeDialog],
    entryComponents: [WelcomeDialog]
})
export class LayoutModule {}
