import { IGoods } from './../types/index';
import Loader from './../controller/loader';

class App extends Loader {
  static goods: void | IGoods;

  async start(): Promise<void> {
    App.goods = await this.load();
  }
}

export default App;
