import { IGoods } from '../types/index';
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

  async execute(event: Event): Promise<void> {
    try {
      const goods: void | IGoods = await this.loader.load();
      if (typeof goods === 'undefined') {
        console.error('goods is Empty');
      } else {
        if (event instanceof KeyboardEvent || event instanceof MouseEvent) {
          const value = (event.target as HTMLInputElement).value;
          goods.data = this.search.search(goods.data, value);
          console.log(goods.data);
          this.generator.generate(goods.data);
        }
      }
    } catch (error) {
      console.error(error);
    }
  }
}

export default Executor;
