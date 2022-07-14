import { IGoodDeatails, TBrandValue, allBrands } from '../types/index';

export class Brand {
  public apple: HTMLImageElement;
  public samsung: HTMLImageElement;
  public xiaomi: HTMLImageElement;
  public sony: HTMLImageElement;
  public microsoft: HTMLImageElement;
  public google: HTMLImageElement;
  public nothing: HTMLImageElement;
  public oneplus: HTMLImageElement;
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

  public brand(event: Event, data: IGoodDeatails[]): IGoodDeatails[] {
    let tempData: IGoodDeatails[] = data;
    // check on selected and saved brands from user
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

    // filter goods according to selected and saved brands from user
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
