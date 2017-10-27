export class Animal {
  public animalAge: boolean = false;
  graphic: string = "/resources/images/old-animal.png"
  constructor(
    public species: string,
    public name: string,
    public age: number,
    public diet: string,
    public location: string,
    public caretakers: number,
    public sex: string,
    public likes: string,
    public dislikes: string) { }

  theAge() {
    if (this.age >= 3) {
      this.graphic = "/resources/images/old-animal.png"
    }
    if(this.age <= 2){
      this.graphic = "resources/images/young-animal.png"
    }
  }
}
