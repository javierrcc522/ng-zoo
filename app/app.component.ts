import { Component } from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'app-root',
  template: `
  <div class="container">
    <h1>Local Zoo</h1>
    <animal-list [childAnimalList]="masterAnimalList" (clickSender)="editAnimal($event)" (deleteButtonClickSender)="deleteAnimal($event)"></animal-list>
      <hr>
      <edit-animal [childSelectedAnimal]="selectedAnimal" (doneButtonClickedSender)="finishedEditing()"></edit-animal>
      <new-animal (newAnimalSender)="addAnimal($event)"></new-animal>
  </div>
  `
})

export class AppComponent {
  selectedAnimal = null;

   masterAnimalList: Animal[] = [
    new Animal('Cat', 'Moon', 7, 'Carnivore', 'Northern Trail', 5, 'Female', 'Cool shade', 'Loud noises'),
    new Animal('Ocelot', 'Prince', 4, 'Carnivore', 'Tropical Rain Forest', 6, 'Male', 'Laying in the sunshine', 'Toys that are not rope-base'),
    new Animal('Black Tail Deer', 'Tinkerbell', 8, 'Herbivore', 'Northern Trail', 2, 'Female', 'Delicate Roots and leaves', 'Loud noises')
  ];

  editAnimal(clickedAnimal) {
    this.selectedAnimal = clickedAnimal;
  }

  deleteAnimal(animalToDelete) {
    if(animalToDelete === this.selectedAnimal){
      this.selectedAnimal = null;
    }
    this.masterAnimalList.splice(this.masterAnimalList.indexOf(animalToDelete), 1)
  }

  finishedEditing() {
    this.selectedAnimal = null;
  }

  addAnimal(newAnimalFromChild: Animal) {
    this.masterAnimalList.push(newAnimalFromChild);
  }
}
