import { Component } from '@angular/core';

@Component({
  selector: 'app-start-game',
  templateUrl: './start-game.component.html',
  styleUrls: ['./start-game.component.css'] // Note the plural 'styleUrls'
})
export class StartGameComponent {
  ipAddress = "play.awellenada-rp.ge:7777";

  copyText() {
    const inputElement = document.getElementById('ipAddress') as HTMLInputElement;
    inputElement.select();
    inputElement.setSelectionRange(0, 99999); // For mobile devices
    document.execCommand('copy');
  }
}
