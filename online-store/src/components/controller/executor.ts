import { IGoods, IGoodDeatails, ColorValue } from '../types/index';
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

  executeGenerate(data: IGoodDeatails[]): void {
    this.generator.generate(data);
  }

  async executeLoad(): Promise<IGoodDeatails[]> {
    const goods: IGoods = (await this.loader.load()) as IGoods;
    return goods.data;
  }

  async executeSearch(event: Event): Promise<void> {
    let searchValue: string = (event.target as HTMLInputElement).value;

    if (!searchValue && localStorage.getItem('search')) {
      (event.target as HTMLInputElement).value = localStorage.getItem('search') || '';
      searchValue = (event.target as HTMLInputElement).value;
      localStorage.removeItem('search');
    }

    window.onunload = (): void => {
      localStorage.setItem('search', `${searchValue}`);
      console.log('test2');
    };

    const filteredResult: IGoodDeatails[] = this.search.search(await this.executeLoad(), searchValue);

    this.executeGenerate(filteredResult); // for test
  }

  async executeColor(color: ColorValue): Promise<void> {
    if (!localStorage.getItem(`${color}`)) {
      localStorage.setItem(`${color}`, `${color}`);
    } else {
      localStorage.removeItem(`${color}`);
    }
    const filteredResult: IGoodDeatails[] = this.color.color(await this.executeLoad(), color);

    this.executeGenerate(filteredResult); // for test
  }
}

export default Executor;
