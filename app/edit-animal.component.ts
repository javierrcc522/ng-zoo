import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'edit-animal',
  template: `
    <div class="row">
    <div id="edit-animal-div">
      <div *ngIf="childSelectedAnimal">

        <h3>{{childSelectedAnimal.species}}</h3>
        <p>Animal Name {{childSelectedAnimal.name}}</p>
        <p>Animal Age {{childSelectedAnimal.age}}</p>
        <p>Animal Diet {{childSelectedAnimal.diet}}</p>
        <p>Animal Location {{childSelectedAnimal.location}}</p>
        <p>Animal Caretakers {{childSelectedAnimal.caretakers}}</p>
        <p>Animal Sex {{childSelectedAnimal.sex}}</p>
        <p>Animal Likes {{childSelectedAnimal.likes}}</p>
        <p>Animal Dislikes {{childSelectedAnimal.dislikes}}</p>

        <hr>


        <h3>Edit Animal</h3>
        <label>Enter Animal Species:</label>
        <input [(ngModel)]="childSelectedAnimal.species">

        <label>Enter Animal Name:</label>
        <input [(ngModel)]="childSelectedAnimal.name">

        <label>Enter Animal Age:</label>
        <input [(ngModel)]="childSelectedAnimal.age">

        <label>Enter Animal Diet:</label>
        <input [(ngModel)]="childSelectedAnimal.diet">

        <label>Enter Animal Location:</label>
        <input [(ngModel)]="childSelectedAnimal.location">

        <label>Enter How Many Caretakers for the Animal:</label>
        <input [(ngModel)]="childSelectedAnimal.caretakers">

        <label>Enter Animal Sex:</label>
        <input [(ngModel)]="childSelectedAnimal.sex">

        <label>Enter Animal Likes:</label>
        <input [(ngModel)]="childSelectedAnimal.likes">

        <label>Enter Animal Dislikes:</label>
        <input [(ngModel)]="childSelectedAnimal.dislikes">


        <button class="button" (click)="doneButtonClicked()">Done</button>
      </div>
    </div>
    </div>
  `
})

export class EditAnimalComponent {
  @Input() childSelectedAnimal: Animal;
  @Output() doneButtonClickedSender = new EventEmitter();

  doneButtonClicked() {
    this.doneButtonClickedSender.emit();
  }
}
