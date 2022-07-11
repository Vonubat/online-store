import { IGoodDeatails, ColorValue } from '../types/index';

export class Color {
  blue: HTMLDivElement;
  black: HTMLDivElement;
  green: HTMLDivElement;
  red: HTMLDivElement;
  white: HTMLDivElement;
  gray: HTMLDivElement;
  constructor() {
    this.blue = document.getElementById('blue') as HTMLDivElement;
    this.black = document.getElementById('black') as HTMLDivElement;
    this.green = document.getElementById('green') as HTMLDivElement;
    this.red = document.getElementById('red') as HTMLDivElement;
    this.white = document.getElementById('white') as HTMLDivElement;
    this.gray = document.getElementById('gray') as HTMLDivElement;
  }

  color(data: IGoodDeatails[], value: ColorValue): IGoodDeatails[] {
    if (this[value].id === value && !this[value].innerHTML) {
      this[value].innerHTML = '✓';
    } else {
      this[value].innerHTML = '';
    }
    return data.filter((item: IGoodDeatails): IGoodDeatails | undefined => {
      if (item.color === value) {
        return item;
      } else return;
    });
  }
}

export default Color;
