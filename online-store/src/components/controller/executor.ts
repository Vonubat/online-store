import { IGoods, IGoodDeatails, TColorValue, allColors } from '../types/index';
import Generator from './generator';
import Loader from './loader';
import Search from '../utilities/search-filter';
import Color from '../utilities/color-filter';

class Executor {
  generator: Generator;
  loader: Loader;
  search: Search;
  color: Color;
  constructor() {
    this.generator = new Generator();
    this.loader = new Loader();
    this.search = new Search();
    this.color = new Color();
  }

  async executeAll(event: Event): Promise<void> {
    let filteredData: Promise<IGoodDeatails[]>;
    console.log(event);

    filteredData = this.executeSearch(event, await this.executeLoad());
    filteredData = this.executeColor(event, await filteredData);
    this.executeGenerate(await filteredData); // for test
  }

  executeGenerate(data: IGoodDeatails[]): void {
    this.generator.generate(data);
  }

  async executeLoad(): Promise<IGoodDeatails[]> {
    const goods: IGoods = (await this.loader.load()) as IGoods;
    return goods.data;
  }

  async executeSearch(event: Event, data: IGoodDeatails[]): Promise<IGoodDeatails[]> {
    let searchValue: string;
    if (typeof (event.target as HTMLInputElement).value === 'undefined') {
      searchValue = this.search.searchInput.value;
    } else {
      searchValue = (event.target as HTMLInputElement).value;
    }

    if (!searchValue && localStorage.getItem('search')) {
      (event.target as HTMLInputElement).value = localStorage.getItem('search') || '';
      searchValue = (event.target as HTMLInputElement).value;
      localStorage.removeItem('search');
    }

    window.onunload = (): void => {
      localStorage.setItem('search', `${searchValue}`);
    };

    return this.search.search(data, searchValue);
  }

  async executeColor(event: Event, data: IGoodDeatails[]): Promise<IGoodDeatails[]> {
    let tempData: IGoodDeatails[] = data;

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

    if (colorStorage.length === 0) {
      this.color.color(data, colorStorage);
    } else {
      tempData = colorStorage.reduce((previousData: IGoodDeatails[]): IGoodDeatails[] => {
        return this.color.color(previousData, colorStorage);
      }, data);
    }

    // console.log(tempData);
    // console.log(localStorage);
    console.log(colorStorage);

    return tempData;
  }
}

export default Executor;
