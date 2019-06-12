import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
 // This is to generate random placeholder images
 mySlideImages = ['dark-knight', 'deadpool-banner', 'compton-banner'];
 mySlideOptions = {items: 1, dots: true, nav: false};
}
