export class Animal {
  public empty: boolean = false;
  graphic: string = "/resources/images/animal.png"
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

}
