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
        if (event instanceof KeyboardEvent) {
          const value = (event.target as HTMLInputElement).value;

          this.generator.generate(this.search.search(goods.data, value));
        }

        // this.generator.generate(goods.data);
      }
    } catch (error) {
      console.error(error);
    }

    // if (event instanceof KeyboardEvent) {
    //   search(goods);
    // }
  }
}

export default Executor;
