import { IGoodDeatails, TColorValue, allColors } from '../types/index';

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

  color(data: IGoodDeatails[], colorStorage: TColorValue[]): IGoodDeatails[] {
    allColors.forEach((item: TColorValue): string => (this[item].innerHTML = ''));
    colorStorage.forEach((item: TColorValue): string => (this[item].innerHTML = `&#10003`));

    return data.filter((item: IGoodDeatails): IGoodDeatails | undefined => {
      if (colorStorage.some((color: TColorValue): boolean => item.color === color)) {
        return item;
      } else return;
    });
  }
}

export default Color;
