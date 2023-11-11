// Name: Nolan Berryhill
// File: composer.service.ts
// Description: TypeScript for the composer aervice
// Date: 11/12/2023

// Import Injectable and IComposer
import { Injectable } from '@angular/core';
import { IComposer } from './composer.interface';

// Create the injectable of the class
@Injectable({
  providedIn: 'root'
})
export class ComposerService {

  composers: Array<IComposer>;

  // Create the composers list
  constructor() {
    this.composers = [
      {
        composerId: 100, fullName: "Wolfgang Amadeus Mozart", genre: "Classical"
      },
      {
        composerId: 101, fullName: "John Adams", genre: "Classical"
      },
      {
        composerId: 102, fullName: "Laurie Anderson", genre: "Modern"
      },
      {
        composerId: 103, fullName: "Trisha Brown", genre: "Choregrapher"
      },
      {
        composerId: 104, fullName: "dietrich Buxtehude", genre: "Classical"
      },
    ]
  }

  // Create getComposers for return
  getComposers() {
    return this.composers;
  }

  // Gives limits for getComposers
  getComposer(composerId: number) {
    for (let composer of this.composers) {
      if (composer.composerId === composerId) {
        return composer;
      }
    }
  }
}
