import { IGoods, IGoodDeatails } from '../types/index';
import Search from '../utilities/search-filter';
import Generator from './generator';
import Loader from './loader';

class Executor {
  generator: Generator;
  loader: Loader;
  search: Search;
  constructor() {
    this.generator = new Generator();
    this.loader = new Loader();
    this.search = new Search();
  }

  executeGenerate(data: IGoodDeatails[]): void {
    this.generator.generate(data);
  }

  async executeLoad(): Promise<IGoodDeatails[]> {
    const goods: IGoods = (await this.loader.load()) as IGoods;
    console.log(goods);
    return goods.data;
  }

  async executeSearch(event: Event): Promise<void> {
    const searchValue: string = (event.target as HTMLInputElement).value;
    const filteredResult: IGoodDeatails[] = this.search.search(await this.executeLoad(), searchValue);

    this.executeGenerate(filteredResult); // for test
  }
}

export default Executor;
