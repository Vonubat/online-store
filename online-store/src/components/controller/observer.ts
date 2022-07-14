import Executor from './executor';

class Observer extends Executor {
  constructor() {
    super();
  }

  // observe loading page
  protected observeDOMContentLoaded(): void {
    document.addEventListener('DOMContentLoaded', this.executeAll.bind(this));
  }

  // observe search-filter
  protected observeSearch(): void {
    this.search.searchInput.addEventListener('click', this.executeAll.bind(this));
    this.search.searchInput.addEventListener('input', this.executeAll.bind(this));
  }

  // observe color-filter
  protected observeColor(): void {
    this.color.blue.addEventListener('click', this.executeAll.bind(this));
    this.color.black.addEventListener('click', this.executeAll.bind(this));
    this.color.green.addEventListener('click', this.executeAll.bind(this));
    this.color.red.addEventListener('click', this.executeAll.bind(this));
    this.color.white.addEventListener('click', this.executeAll.bind(this));
    this.color.gray.addEventListener('click', this.executeAll.bind(this));
  }

  // observe camera-filter
  protected observeCamera(): void {
    this.camera.camera1.addEventListener('change', this.executeAll.bind(this));
    this.camera.camera2.addEventListener('change', this.executeAll.bind(this));
    this.camera.camera3.addEventListener('change', this.executeAll.bind(this));
    this.camera.camera4.addEventListener('change', this.executeAll.bind(this));
  }

  // observe brand-filter
  protected observeBrand(): void {
    this.brand.apple.addEventListener('click', this.executeAll.bind(this));
    this.brand.google.addEventListener('click', this.executeAll.bind(this));
    this.brand.microsoft.addEventListener('click', this.executeAll.bind(this));
    this.brand.nothing.addEventListener('click', this.executeAll.bind(this));
    this.brand.samsung.addEventListener('click', this.executeAll.bind(this));
    this.brand.sony.addEventListener('click', this.executeAll.bind(this));
    this.brand.xiaomi.addEventListener('click', this.executeAll.bind(this));
    this.brand.oneplus.addEventListener('click', this.executeAll.bind(this));
  }

  // observe favorites-filter
  protected observePopular(): void {
    this.popular.popular.addEventListener('click', this.executeAll.bind(this));
  }

  // observe reset localStorage & filters
  protected observeLocalStorage(): void {
    this.localStorage.resetLocalStorage.addEventListener('click', this.executeAll.bind(this));
    this.localStorage.resetFilters.addEventListener('click', this.executeAll.bind(this));
  }

  // observe sort
  protected observeSort(): void {
    this.sort.nameAscent.addEventListener('click', this.executeAll.bind(this));
    this.sort.nameDescent.addEventListener('click', this.executeAll.bind(this));
    this.sort.yearAscent.addEventListener('click', this.executeAll.bind(this));
    this.sort.yearDescent.addEventListener('click', this.executeAll.bind(this));
    this.sort.quantityAscent.addEventListener('click', this.executeAll.bind(this));
    this.sort.quantityDescent.addEventListener('click', this.executeAll.bind(this));
  }

  // observe sliders (year & quantity filters)
  protected observeSliders(): void {
    this.sliders.quantitySlider.on('change', this.sliders.setter.bind(this.sliders));
    this.sliders.yearSlider.on('change', this.sliders.setter.bind(this.sliders));
    this.sliders.rangeFilter.addEventListener('mouseup', this.executeAll.bind(this));
    this.sliders.rangeFilter.addEventListener('mouseleave', this.executeAll.bind(this));
  }
}

export default Observer;
