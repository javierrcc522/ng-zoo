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
        <p>Animal Age {{childSelectedAnimal.age}}</p><button class="btn btn-danger" (click)="yearRemovedFromAnimal()" (click)="childSelectedAnimal.theAge()">take age</button><button class="btn btn-success" (click)="yearAddFromAnimal()" (click)="childSelectedAnimal.theAge()">add age</button>
        <p>Animal Diet {{childSelectedAnimal.diet}}</p>
        <p>Animal Location {{childSelectedAnimal.location}}</p>
        <p>Animal Caretakers {{childSelectedAnimal.caretakers}}</p>
        <p>Animal Sex {{childSelectedAnimal.sex}}</p>
        <p>Animal Likes {{childSelectedAnimal.likes}}</p>
        <p>Animal Dislikes {{childSelectedAnimal.dislikes}}</p>

        <hr>


        <h3>Edit Animal</h3>
        <div class="col-sm-6">
          <label>Enter Animal Species:</label>
          <input [(ngModel)]="childSelectedAnimal.species"><br>
          <label>Enter Animal Name:</label>
          <input [(ngModel)]="childSelectedAnimal.name"><br>
          <label>Enter Animal Diet:</label>
          <input [(ngModel)]="childSelectedAnimal.diet"><br>
          <label>Enter Animal Location:</label>
          <input [(ngModel)]="childSelectedAnimal.location"><br>
        </div>
        <div class="col-sm-6">
          <label>Enter Caretakers for Animal:</label>
          <input [(ngModel)]="childSelectedAnimal.caretakers"><br>
          <label>Enter Animal Sex:</label>
          <input [(ngModel)]="childSelectedAnimal.sex"><br>
          <label>Enter Animal Likes:</label>
          <input [(ngModel)]="childSelectedAnimal.likes"><br>
          <label>Enter Animal Dislikes:</label>
          <input [(ngModel)]="childSelectedAnimal.dislikes"><br>
        </div>
        <button class="btn btn-success" (click)="doneButtonClicked()">Done</button>
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

  yearRemovedFromAnimal(){
    this.childSelectedAnimal.age -= 1;
    if(this.childSelectedAnimal.age <= 2) {
      this.childSelectedAnimal.animalAge = true;
    }
  }

  yearAddFromAnimal(){
    this.childSelectedAnimal.age += 1;
    if(this.childSelectedAnimal.age >= 3) {
      this.childSelectedAnimal.animalAge = false;
    }
  }



}
