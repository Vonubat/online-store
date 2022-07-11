import { IGoods } from './../types/index';

class Loader {
  private url: string;

  constructor() {
    this.url = 'db/core.json';
  }

  private async errorHandler(res: Response): Promise<Response> {
    if (!res.ok) {
      console.log(`Sorry, but there is ${res.status} error: ${res.statusText}`);
      throw Error(res.statusText);
    }

    return res;
  }

  async load(): Promise<void | IGoods> {
    try {
      const response: Response = await fetch(this.url);
      await this.errorHandler(response);
      const result: Promise<IGoods> = await response.json();
      if (typeof result === 'undefined') {
        console.error('goods is Empty');
      } else {
        return result;
      }
    } catch (error: unknown) {
      console.error(error);
    }
  }
}

export default Loader;
