import { IGoods } from '../../types/index';

class Loader {
  private url: string;

  constructor() {
    this.url = 'db/core.json';
  }

  private errorHandler(res: Response): Response {
    if (!res.ok) {
      console.log(`Sorry, but there is ${res.status} error: ${res.statusText}`);

      throw Error(res.statusText);
    }

    return res;
  }

  load(): IGoods | void {
    fetch(this.url)
      .then(this.errorHandler)
      .then((res: Response): Promise<IGoods> => res.json())
      .then(
        (data: IGoods): IGoods => {
          console.log(data);
          return data;
        }
      )
      .catch((err: Error): void => console.error(err));
  }
}

export default Loader;
