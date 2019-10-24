import { Component, OnInit, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { routerTransition } from '../../router.animations';
import { ToolService } from '../../services/tool.service';
import { MatDialog } from '@angular/material';


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

    constructor(
        public router: Router,
        private toolService: ToolService,
        public dialog: MatDialog
    ) {
    }

    ngOnInit() {
        this.toolService.load();
    }
}
