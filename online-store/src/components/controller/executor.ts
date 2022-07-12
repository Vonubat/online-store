import { IGoods, IGoodDeatails, TColorValue, TCameraValue, allColors, allCameras } from '../types/index';
import Generator from './generator';
import Loader from './loader';
import Search from '../utilities/search-filter';
import Color from '../utilities/color-filter';
import Camera from '../utilities/camera-filter';

class Executor {
  generator: Generator;
  loader: Loader;
  search: Search;
  color: Color;
  camera: Camera;
  constructor() {
    this.generator = new Generator();
    this.loader = new Loader();
    this.search = new Search();
    this.color = new Color();
    this.camera = new Camera();
  }

  async executeAll(event: Event): Promise<void> {
    let filteredData: Promise<IGoodDeatails[]>;

    filteredData = this.executeSearch(event, await this.executeLoad());
    filteredData = this.executeColor(event, await filteredData);
    filteredData = this.executeCamera(event, await filteredData);
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

    if (
      typeof (event.target as HTMLInputElement).value === 'undefined' ||
      (event.target as HTMLInputElement).value === 'cameraEvent'
    ) {
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
    // console.log(colorStorage);

    return tempData;
  }

  async executeCamera(event: Event, data: IGoodDeatails[]): Promise<IGoodDeatails[]> {
    let tempData: IGoodDeatails[] = data;

    const cameraStorage: TCameraValue[] = allCameras.filter((quantity: TCameraValue): TCameraValue | undefined => {
      if (`camera${quantity}` === (event.target as HTMLInputElement).id) {
        if (localStorage.getItem(`camera${quantity}`)) {
          localStorage.removeItem(`camera${quantity}`);
        } else {
          localStorage.setItem(`camera${quantity}`, `camera${quantity}`);
        }
      }
      if (localStorage.getItem(`camera${quantity}`)) {
        return quantity;
      } else return;
    });

    if (cameraStorage.length === 0) {
      this.camera.camera(data, cameraStorage);
    } else {
      tempData = cameraStorage.reduce((previousData: IGoodDeatails[]): IGoodDeatails[] => {
        return this.camera.camera(previousData, cameraStorage);
      }, data);
    }

    // console.log(tempData);
    // console.log(localStorage);
    // console.log(cameraStorage);
    console.log(event);

    return tempData;
  }
}

export default Executor;
