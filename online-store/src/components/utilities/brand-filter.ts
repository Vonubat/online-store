import { IGoodDeatails, TBrandValue, allBrands } from '../types/index';

export class Brand {
  apple: HTMLImageElement;
  samsung: HTMLImageElement;
  xiaomi: HTMLImageElement;
  sony: HTMLImageElement;
  microsoft: HTMLImageElement;
  google: HTMLImageElement;
  nothing: HTMLImageElement;
  oneplus: HTMLImageElement;
  constructor() {
    this.apple = document.getElementById('apple') as HTMLImageElement;
    this.samsung = document.getElementById('samsung') as HTMLImageElement;
    this.xiaomi = document.getElementById('xiaomi') as HTMLImageElement;
    this.sony = document.getElementById('sony') as HTMLImageElement;
    this.microsoft = document.getElementById('microsoft') as HTMLImageElement;
    this.google = document.getElementById('google') as HTMLImageElement;
    this.nothing = document.getElementById('nothing') as HTMLImageElement;
    this.oneplus = document.getElementById('oneplus') as HTMLImageElement;
  }

  brand(event: Event, data: IGoodDeatails[]): IGoodDeatails[] {
    let tempData: IGoodDeatails[] = data;

    const brandStorage: TBrandValue[] = allBrands.filter((brand: TBrandValue): TBrandValue | undefined => {
      if (brand.toLocaleLowerCase() === (event.target as HTMLInputElement).id) {
        if (localStorage.getItem(brand)) {
          localStorage.removeItem(brand);
        } else {
          localStorage.setItem(brand, brand);
        }
      }
      if (localStorage.getItem(brand)) {
        return brand;
      } else return;
    });

    if (brandStorage.length === 0) {
      tempData = data;
    } else {
      tempData = brandStorage.reduce((previousData: IGoodDeatails[]): IGoodDeatails[] => {
        return previousData.filter((item: IGoodDeatails): IGoodDeatails | undefined => {
          if (
            brandStorage.some(
              (brand: TBrandValue): boolean => item.brand.toLocaleLowerCase() === brand.toLocaleLowerCase()
            )
          ) {
            return item;
          } else return;
        });
      }, data);
    }

    allBrands.forEach((item: TBrandValue): void => {
      return this[item].classList.remove('active');
    });

    brandStorage.forEach((item: TBrandValue): boolean => {
      return this[item].classList.toggle('active');
    });

    return tempData;
  }
}

export default Brand;
