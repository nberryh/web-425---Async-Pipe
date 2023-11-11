// Name: Nolan Berryhill
// File: app.component.ts
// Description: TypeScript for the App Component
// Date: 11/12/2023

// Import Component
import { Component } from '@angular/core';

// Creates and export the app component
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

// export AppComponent
export class AppComponent {
  assignment: string = 'Exercise 4.4 - Async Pipe';
}
