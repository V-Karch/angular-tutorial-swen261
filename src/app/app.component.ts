import { Component } from '@angular/core';

import { HeroesComponent } from './heroes/heroes.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [HeroesComponent, CommonModule],
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Tour of Heroes';
}