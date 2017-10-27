import { Component, Output, EventEmitter } from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'new-animal',
  template: `
  <h1>Add a new animal to the local zoo:</h1>
  <div>
    <label>Species</label>
    <input #newSpecies>
    <label>Name</label>
    <input #newName>
    <label>Age</label>
    <input #newAge>
    <label>Diet</label>
    <input #newDiet>
    <label>Location</label>
    <input #newLocation>
    <label>Caretakers</label>
    <input #newCaretakers>
    <label>Sex</label>
    <input #newSex>
    <label>Likes</label>
    <input #newLikes>
    <label>Dislikes</label>
    <input #newDislikes>


    <button class="button" (click)="submitForm(
      newSpecies.value,
      newName.value,
      newAge.value,
      newDiet.value,
      newLocation.value,
      newCaretakers.value,
      newSex.value,
      newLikes.value,
      newDislikes.value);">Add</button>
  </div>
  `
})

export class NewAnimalComponent {
  @Output() newAnimalSender = new EventEmitter();

  submitForm(species: string, name: string, age: string, diet: number, location: number, caretakers: number, sex: number, likes: number, dislikes: number) {
    var newAnimalToAdd: Animal = new Animal(species, name, age, diet, location, caretakers, sex, likes, dislikes);
    this.newAnimalSender.emit(newAnimalToAdd);
  }
}
