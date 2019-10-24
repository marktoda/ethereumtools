import { Component, OnInit, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { routerTransition } from '../../router.animations';
import { ToolService } from '../../services/tool.service';
import { MatDialog } from '@angular/material';
import { WelcomeDialog } from './welcome.dialog.component';


@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss'],
    animations: [routerTransition()],
    providers: []
})
export class HomeComponent implements OnInit {
    hasSeenWelcome(): boolean {
        return localStorage.getItem('hasSeenWelcome') !== null;
    }

    openDialog(): void {
        if (!this.hasSeenWelcome()) {
            const dialogRef = this.dialog.open(WelcomeDialog, {
                width: '600px',
                autoFocus: false,
            });
    
            dialogRef.afterClosed().subscribe(result => {
                localStorage.setItem('hasSeenWelcome', 'true');
            });
        }
    }

    constructor(
        public router: Router,
        private toolService: ToolService,
        public dialog: MatDialog
    ) {
        this.openDialog();
    }

    ngOnInit() {
        this.toolService.load();
    }
}
