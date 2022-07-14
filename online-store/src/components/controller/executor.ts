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

class Executor extends Loader {
  protected sort: Sort;
  protected search: Search;
  protected brand: Brand;
  protected camera: Camera;
  protected color: Color;
  protected popular: Popular;
  protected sliders: Sliders;
  protected generator: Generator;
  protected shoppingCart: ShoppingCart;
  protected localStorage: LocalStorage;

  constructor() {
    super();
    this.sort = new Sort();
    this.search = new Search();
    this.brand = new Brand();
    this.camera = new Camera();
    this.color = new Color();
    this.popular = new Popular();
    this.sliders = new Sliders();
    this.generator = new Generator();
    this.shoppingCart = new ShoppingCart();
    this.localStorage = new LocalStorage();
  }

  protected async executeAll(event: Event): Promise<void> {
    let filteredData: Promise<IGoodDeatails[]>;

    // execute sort & filters
    filteredData = this.executeSort(event, await this.executeLoad());
    filteredData = this.executeSearch(event, await filteredData);
    filteredData = this.executeBrand(event, await filteredData);
    filteredData = this.executeCamera(event, await filteredData);
    filteredData = this.executeColor(event, await filteredData);
    filteredData = this.executePopular(event, await filteredData);
    filteredData = this.executeSlides(event, await filteredData);

    // execute DOM-generator +  implement Shopping Cart + reset localStorage & filters
    this.executeGenerate(await filteredData);
    this.executeShoppingCart(event);
    this.executeLocalStorage(event, await filteredData);
  }

  protected async executeLoad(): Promise<IGoodDeatails[]> {
    const goods: IGoods = (await this.load()) as IGoods;
    return goods.data;
  }

  protected async executeSort(event: Event, data: IGoodDeatails[]): Promise<IGoodDeatails[]> {
    return this.sort.sort(event, data);
  }

  protected async executeSearch(event: Event, data: IGoodDeatails[]): Promise<IGoodDeatails[]> {
    return this.search.search(event, data);
  }

  protected async executeBrand(event: Event, data: IGoodDeatails[]): Promise<IGoodDeatails[]> {
    return this.brand.brand(event, data);
  }

  protected async executeCamera(event: Event, data: IGoodDeatails[]): Promise<IGoodDeatails[]> {
    return this.camera.camera(event, data);
  }

  protected async executeColor(event: Event, data: IGoodDeatails[]): Promise<IGoodDeatails[]> {
    return this.color.color(event, data);
  }

  protected async executePopular(event: Event, data: IGoodDeatails[]): Promise<IGoodDeatails[]> {
    return this.popular.favorites(event, data);
  }

  protected async executeSlides(event: Event, data: IGoodDeatails[]): Promise<IGoodDeatails[]> {
    return this.sliders.filter(event, data);
  }

  protected executeGenerate(data: IGoodDeatails[]): void {
    this.generator.generate(data);
  }

  protected executeShoppingCart(event: Event): void {
    this.shoppingCart.updateActualGoods(event);
  }

  protected executeLocalStorage(event: Event, data: IGoodDeatails[]): void {
    this.localStorage.save(data);
    this.localStorage.resetHard(event);
    this.localStorage.resetSoft(event);
  }
}

export default Executor;
