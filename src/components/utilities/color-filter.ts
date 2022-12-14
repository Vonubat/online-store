import { IGoodDeatails, TColorValue, allColors } from '../types/index';

export class Color {
  public blue: HTMLDivElement;
  public black: HTMLDivElement;
  public green: HTMLDivElement;
  public red: HTMLDivElement;
  public white: HTMLDivElement;
  public gray: HTMLDivElement;
  constructor() {
    this.blue = document.getElementById('blue') as HTMLDivElement;
    this.black = document.getElementById('black') as HTMLDivElement;
    this.green = document.getElementById('green') as HTMLDivElement;
    this.red = document.getElementById('red') as HTMLDivElement;
    this.white = document.getElementById('white') as HTMLDivElement;
    this.gray = document.getElementById('gray') as HTMLDivElement;
  }

  public color(event: Event, data: IGoodDeatails[]): IGoodDeatails[] {
    let tempData: IGoodDeatails[] = data;
    // check on selected and saved colors from user
    const colorStorage: TColorValue[] = allColors.filter((color: TColorValue): TColorValue | undefined => {
      if (color === (event.target as HTMLInputElement).id) {
        if (localStorage.getItem(color)) {
          localStorage.removeItem(color);
        } else {
          localStorage.setItem(color, color);
        }
      }
      if (localStorage.getItem(color)) {
        return color;
      } else return;
    });

    // filter goods according to selected and saved colors from user
    if (colorStorage.length === 0) {
      tempData = data;
    } else {
      tempData = colorStorage.reduce((previousData: IGoodDeatails[]): IGoodDeatails[] => {
        return previousData.filter((item: IGoodDeatails): IGoodDeatails | undefined => {
          if (colorStorage.some((color: TColorValue): boolean => item.color === color)) {
            return item;
          } else return;
        });
      }, data);
    }

    allColors.forEach((item: TColorValue): string => (this[item].innerHTML = ''));
    colorStorage.forEach((item: TColorValue): string => (this[item].innerHTML = `&#10003`));

    return tempData;
  }
}

export default Color;
