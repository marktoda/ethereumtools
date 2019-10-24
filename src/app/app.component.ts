import { Component, OnInit, AfterViewInit, ElementRef } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, AfterViewInit {
    bgColor: string;

    constructor(
        private elementRef: ElementRef,
        private router: Router) {
        this.bgColor = 'ffffff'; // 222222
    }

    ngOnInit() {
    }

    ngAfterViewInit() {
        this.elementRef.nativeElement.ownerDocument.body.style.backgroundColor = '#ffffff'; //222222
    }
}
