import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'animal-list',
  template: `
    <select class="select" (change)="onChange($event.target.value)">
      <option value="allAnimals" selected="selected">All animals</option>
      <option value="youngAnimals">Young</option>
      <option value="oldAnimals">Old</option>
    </select>
    <ul>
      <li *ngFor="let currentAnimal of childAnimalList | completeness:filterByAge">{{currentAnimal.name}} {{currentKeg.species}} <img src='{{currentAnimal.graphic}}'>
        <button class="button" (click)="editAnimal(currentAnimal)">Edit!</button>
        <button class="button-delete" (click)="deleteAnimal(currentAnimal)">Delete!</button>
      </li>
    </ul>
  `
})

export class AnimalListComponent {
  @Input() childAnimalList: Animal[];
  @Output() clickSender = new EventEmitter();
  @Output() deleteButtonClickSender = new EventEmitter();
  filterByAge: string = "oldAnimals";


  editAnimal(animalToEdit: Animal) {
    this.clickSender.emit(animalToEdit);
  }

  deleteAnimal(animalToDelete: Animal) {
    this.deleteButtonClickSender.emit(animalToDelete);
  }

  onChange(optionFromMenu) {
    this.filterByAge = optionFromMenu;
  }

  toggleEmpty(clickedAnimal: Animal, setCompleteness: boolean) {
    clickedAnimal.empty = setCompleteness;
  }


}
