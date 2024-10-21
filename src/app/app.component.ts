import { Component, HostListener, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'samp';
  isScrolled = false;
  footerClass: string = '';
  onlinePlayers: number = 0; // Added variable for online players

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.isScrolled = window.scrollY > 50;
  }

  constructor(private router: Router, private appService: AppService) {}

  ngOnInit() {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        if (event.urlAfterRedirects.includes('/start-game')) {
          this.footerClass = 'start-game-footer';
        } else {
          this.footerClass = 'welcome-page';
        }
      }
    });

    this.fetchOnlinePlayers(); // Fetch online players when the component initializes
  }

  fetchOnlinePlayers(): void {
    this.appService.getOnlinePlayers().subscribe(
      data => {
        this.onlinePlayers = data.onlinePlayers;
      },
      error => {
        console.error('Error fetching online players', error);
      }
    );
  }
}
