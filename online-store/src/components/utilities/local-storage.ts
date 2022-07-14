import {
  allBrands,
  allCameras,
  allColors,
  IGoodDeatails,
  TBrandValue,
  TCameraValue,
  TColorValue,
} from '../types/index';

export class LocalStorage {
  public resetLocalStorage: HTMLButtonElement;
  public resetFilters: HTMLButtonElement;
  constructor() {
    this.resetLocalStorage = document.getElementById('reset-local-storage') as HTMLButtonElement;
    this.resetFilters = document.getElementById('reset-filters') as HTMLButtonElement;
  }

  public save(data: IGoodDeatails[]): void {
    localStorage.setItem('data', `${JSON.stringify(data)}`);
  }

  public resetHard(event: Event): void {
    if ((event.target as HTMLElement).id === 'reset-local-storage') {
      localStorage.clear();
      location.reload();
    }
  }

  public resetSoft(event: Event): void {
    if ((event.target as HTMLElement).id === 'reset-filters') {
      for (const key in localStorage) {
        if (!localStorage.hasOwnProperty(key)) {
          continue;
        }

        if (allBrands.some((item: TBrandValue): boolean => item === key)) {
          localStorage.removeItem(`${key}`);
        }

        if (allCameras.some((item: TCameraValue): boolean => `camera${item}` === key)) {
          localStorage.removeItem(`${key}`);
        }

        if (allColors.some((item: TColorValue): boolean => item === key)) {
          localStorage.removeItem(`${key}`);
        }

        localStorage.removeItem('popular');
        localStorage.removeItem('search');
        localStorage.removeItem('quantityStart');
        localStorage.removeItem('quantityEnd');
        localStorage.removeItem('yearStart');
        localStorage.removeItem('yearEnd');
        location.reload();
      }
    }
  }
}

export default LocalStorage;
