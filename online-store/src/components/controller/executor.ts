import { IGoods, IGoodDeatails } from '../types/index';
import Generator from '../view/generator';
import Loader from './loader';
import Search from '../utilities/search-filter';
import Color from '../utilities/color-filter';
import Camera from '../utilities/camera-filter';
import Brand from '../utilities/brand-filter';
import Popular from '../utilities/popular-filter';

import Sort from '../utilities/sort';
import Sliders from '../utilities/sliders';
import LocalStorage from '../utilities/local-storage';
import ShoppingCart from '../utilities/shopping-cart';

class Executor {
  generator: Generator;
  loader: Loader;
  search: Search;
  color: Color;
  camera: Camera;
  brand: Brand;
  popular: Popular;
  sort: Sort;
  sliders: Sliders;
  localStorage: LocalStorage;
  shoppingCart: ShoppingCart;

  constructor() {
    this.generator = new Generator();
    this.loader = new Loader();
    this.search = new Search();
    this.color = new Color();
    this.camera = new Camera();
    this.brand = new Brand();
    this.popular = new Popular();
    this.sort = new Sort();
    this.sliders = new Sliders();
    this.localStorage = new LocalStorage();
    this.shoppingCart = new ShoppingCart();
  }

  async executeAll(event: Event): Promise<void> {
    let filteredData: Promise<IGoodDeatails[]>;
    // console.log(event);

    filteredData = this.executeSort(event, await this.executeLoad());
    filteredData = this.executeSearch(event, await filteredData);
    filteredData = this.executeBrand(event, await filteredData);
    filteredData = this.executeCamera(event, await filteredData);
    filteredData = this.executeColor(event, await filteredData);
    filteredData = this.executePopular(event, await filteredData);
    filteredData = this.executeSlides(event, await filteredData);

    this.executeGenerate(await filteredData);
    this.executeShoppingCart(event);
    this.executeLocalStorage(event, await filteredData);
  }

  async executeLoad(): Promise<IGoodDeatails[]> {
    const goods: IGoods = (await this.loader.load()) as IGoods;
    return goods.data;
  }

  async executeSearch(event: Event, data: IGoodDeatails[]): Promise<IGoodDeatails[]> {
    return this.search.search(event, data);
  }

  async executeColor(event: Event, data: IGoodDeatails[]): Promise<IGoodDeatails[]> {
    return this.color.color(event, data);
  }

  async executeCamera(event: Event, data: IGoodDeatails[]): Promise<IGoodDeatails[]> {
    return this.camera.camera(event, data);
  }

  async executeBrand(event: Event, data: IGoodDeatails[]): Promise<IGoodDeatails[]> {
    return this.brand.brand(event, data);
  }

  async executePopular(event: Event, data: IGoodDeatails[]): Promise<IGoodDeatails[]> {
    return this.popular.favorites(event, data);
  }

  async executeSort(event: Event, data: IGoodDeatails[]): Promise<IGoodDeatails[]> {
    return this.sort.sort(event, data);
  }

  async executeSlides(event: Event, data: IGoodDeatails[]): Promise<IGoodDeatails[]> {
    return this.sliders.filter(event, data);
  }

  executeLocalStorage(event: Event, data: IGoodDeatails[]): void {
    this.localStorage.save(data);
    this.localStorage.resetHard(event);
    this.localStorage.resetSoft(event);
  }

  executeGenerate(data: IGoodDeatails[]): void {
    this.generator.generate(data);
  }

  executeShoppingCart(event: Event): void {
    this.shoppingCart.updateActualGoods(event);
  }
}

export default Executor;
