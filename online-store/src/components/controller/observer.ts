import Executor from './executor';

class Observer extends Executor {
  constructor() {
    super();
  }

  observeDOMContentLoaded(): void {
    document.addEventListener('DOMContentLoaded', this.executeAll.bind(this));
  }

  observeSearch(): void {
    this.search.searchInput.addEventListener('click', this.executeAll.bind(this));
    this.search.searchInput.addEventListener('input', this.executeAll.bind(this));
  }

  observeColor(): void {
    this.color.blue.addEventListener('click', this.executeAll.bind(this));
    this.color.black.addEventListener('click', this.executeAll.bind(this));
    this.color.green.addEventListener('click', this.executeAll.bind(this));
    this.color.red.addEventListener('click', this.executeAll.bind(this));
    this.color.white.addEventListener('click', this.executeAll.bind(this));
    this.color.gray.addEventListener('click', this.executeAll.bind(this));
  }

  observeCamera(): void {
    this.camera.camera1.addEventListener('change', this.executeAll.bind(this));
    this.camera.camera2.addEventListener('change', this.executeAll.bind(this));
    this.camera.camera3.addEventListener('change', this.executeAll.bind(this));
    this.camera.camera4.addEventListener('change', this.executeAll.bind(this));
  }

  observeBrand(): void {
    this.brand.apple.addEventListener('click', this.executeAll.bind(this));
    this.brand.google.addEventListener('click', this.executeAll.bind(this));
    this.brand.microsoft.addEventListener('click', this.executeAll.bind(this));
    this.brand.nothing.addEventListener('click', this.executeAll.bind(this));
    this.brand.samsung.addEventListener('click', this.executeAll.bind(this));
    this.brand.sony.addEventListener('click', this.executeAll.bind(this));
    this.brand.xiaomi.addEventListener('click', this.executeAll.bind(this));
    this.brand.oneplus.addEventListener('click', this.executeAll.bind(this));
  }

  observePopular(): void {
    this.popular.popular.addEventListener('click', this.executeAll.bind(this));
  }

  observeResetLocalStorage(): void {
    this.resetLocalSorage.resetLocalStorage.addEventListener('click', this.executeResetLocalStorage.bind(this));
  }

  observeSort(): void {
    this.sort.nameAscent.addEventListener('click', this.executeAll.bind(this));
    this.sort.nameDescent.addEventListener('click', this.executeAll.bind(this));
    this.sort.yearAscent.addEventListener('click', this.executeAll.bind(this));
    this.sort.yearDescent.addEventListener('click', this.executeAll.bind(this));
    this.sort.quantityAscent.addEventListener('click', this.executeAll.bind(this));
    this.sort.quantityDescent.addEventListener('click', this.executeAll.bind(this));
  }
}

export default Observer;
