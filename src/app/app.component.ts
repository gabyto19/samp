import { Component, HostListener, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']  // Corrected styleUrls
})
export class AppComponent implements OnInit {
  title = 'samp';
  isScrolled = false;
  footerClass: string = '';  // Initialize footerClass as a string
  
  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.isScrolled = window.scrollY > 50; // Trigger based on scroll position
  }

  constructor(private router: Router) {}

  ngOnInit() {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        if (event.urlAfterRedirects.includes('/start-game')) {
          this.footerClass = 'start-game-footer';  // Assign class based on route
        } else {
          this.footerClass = 'welcome-page';  // Reset class for other routes
        }
      }
    });
  }
}
