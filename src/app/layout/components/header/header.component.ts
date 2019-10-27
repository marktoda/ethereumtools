import { Component, OnInit, HostListener } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss'],
    providers: []
})
export class HeaderComponent implements OnInit {
    dropdownActive = false;
    public innerWidth: number;
    path: string;

    constructor(private router: Router, 
        public dialog: MatDialog
    ) {
    }

    ngOnInit() {
        this.innerWidth = window.innerWidth;
    }


    onClick() {
        this.router.navigate(['/']);
    }

    smallScreen(): boolean {
        return this.innerWidth < 800;
    }

    @HostListener('window:resize', ['$event'])
    onResize(event) {
        this.innerWidth = window.innerWidth;
    }
}
