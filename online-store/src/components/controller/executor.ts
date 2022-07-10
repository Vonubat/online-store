import { IGoods } from '../types/index';
import Generator from './generator';
// import Search from './../utilities/search-filter';
import Loader from './loader';

class Executor {
  generator: Generator;
  loader: Loader;
  constructor() {
    this.generator = new Generator();
    this.loader = new Loader();
  }

  async execute(/* event: Event */): Promise<void> {
    const goods: void | IGoods = await this.loader.load();
    if (typeof goods === 'undefined') {
      console.error('goods is Empty');
    } else {
      this.generator.generate(goods);
    }

    // if (event instanceof KeyboardEvent) {
    //   search(goods);
    // }
  }
}

export default Executor;
