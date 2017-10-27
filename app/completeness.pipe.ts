import {Pipe, PipeTransform} from '@angular/core';
import { Animal } from './animal.model';

@Pipe({
  name: "completeness",
  pure: false
})


export class CompletenessPipe implements PipeTransform {

  transform(input: Animal[], desiredCompleteness) {
    var output: Animal[] = [];
    if(desiredCompleteness === "incompleteAnimals") {
      for (var i = 0; i < input.length; i++) {
        if (input[i].empty === false) {
          output.push(input[i]);
        }
      }
      return output;
    } else if (desiredCompleteness === "completedAnimals") {
      for (var i = 0; i < input.length; i++) {
        if (input[i].empty === true) {
          output.push(input[i]);
        }
      }
      return output;
    } else {
      return input;
    }
  }
}
