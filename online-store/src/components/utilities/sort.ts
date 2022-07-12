import { allSorts, IGoodDeatails, TSortValue } from '../types/index';

export class Sort {
  nameAscent: HTMLAnchorElement;
  nameDescent: HTMLAnchorElement;
  yearAscent: HTMLAnchorElement;
  yearDescent: HTMLAnchorElement;
  quantityAscent: HTMLAnchorElement;
  quantityDescent: HTMLAnchorElement;

  constructor() {
    this.nameAscent = document.getElementById('name-ascent') as HTMLAnchorElement;
    this.nameDescent = document.getElementById('name-descent') as HTMLAnchorElement;
    this.yearAscent = document.getElementById('year-ascent') as HTMLAnchorElement;
    this.yearDescent = document.getElementById('year-descent') as HTMLAnchorElement;
    this.quantityAscent = document.getElementById('quantity-ascent') as HTMLAnchorElement;
    this.quantityDescent = document.getElementById('quantity-descent') as HTMLAnchorElement;
  }

  sort(event: Event, data: IGoodDeatails[]): IGoodDeatails[] {
    let id: string = (event.target as HTMLElement).id;
    // console.log(localStorage);

    if (event.type === 'DOMContentLoaded') {
      id = localStorage.getItem('sort') || '';
      return this.sortEngine(id, data);
    }

    if (allSorts.some((item: TSortValue): boolean => item === id)) {
      return this.sortEngine(id, data);
    } else {
      id = localStorage.getItem('sort') || '';
      return this.sortEngine(id, data);
    }
  }

  sortEngine(id: string, data: IGoodDeatails[]): IGoodDeatails[] {
    let tempData: IGoodDeatails[] = data;
    switch (id) {
      case 'name-ascent':
        tempData = data.sort((a: IGoodDeatails, b: IGoodDeatails): 1 | -1 | 0 => {
          if (a.phone_name > b.phone_name) {
            return 1;
          }
          if (a.phone_name < b.phone_name) {
            return -1;
          }
          return 0;
        });
        localStorage.removeItem('sort');
        localStorage.setItem('sort', `${id}`);
        break;

      case 'name-descent':
        tempData = data.sort((a: IGoodDeatails, b: IGoodDeatails): 1 | -1 | 0 => {
          if (a.phone_name > b.phone_name) {
            return -1;
          }
          if (a.phone_name < b.phone_name) {
            return 1;
          }
          return 0;
        });
        localStorage.removeItem('sort');
        localStorage.setItem('sort', `${id}`);
        break;

      case 'year-ascent':
        tempData = data.sort((a: IGoodDeatails, b: IGoodDeatails): 1 | -1 | 0 => {
          if (a.year > b.year) {
            return 1;
          }
          if (a.year < b.year) {
            return -1;
          }
          return 0;
        });
        localStorage.removeItem('sort');
        localStorage.setItem('sort', `${id}`);
        break;

      case 'year-descent':
        tempData = data.sort((a: IGoodDeatails, b: IGoodDeatails): 1 | -1 | 0 => {
          if (a.year > b.year) {
            return -1;
          }
          if (a.year < b.year) {
            return 1;
          }
          return 0;
        });
        localStorage.removeItem('sort');
        localStorage.setItem('sort', `${id}`);
        break;

      case 'quantity-ascent':
        tempData = data.sort((a: IGoodDeatails, b: IGoodDeatails): 1 | -1 | 0 => {
          if (a.quantity > b.quantity) {
            return 1;
          }
          if (a.quantity < b.quantity) {
            return -1;
          }
          return 0;
        });
        localStorage.removeItem('sort');
        localStorage.setItem('sort', `${id}`);
        break;

      case 'quantity-descent':
        tempData = data.sort((a: IGoodDeatails, b: IGoodDeatails): 1 | -1 | 0 => {
          if (a.quantity > b.quantity) {
            return -1;
          }
          if (a.quantity < b.quantity) {
            return 1;
          }
          return 0;
        });
        localStorage.removeItem('sort');
        localStorage.setItem('sort', `${id}`);
        break;

      default:
        break;
    }

    return tempData;
  }
}
export default Sort;
