export class ShoppingCart {
  protected shopingCartNotification: HTMLDivElement;
  protected shopingCartAdd: NodeListOf<Element>;
  private modalTrigger: HTMLButtonElement;

  constructor() {
    this.shopingCartNotification = document.getElementById('shoping-cart-notification') as HTMLDivElement;
    this.shopingCartAdd = document.querySelectorAll('.shoping-cart-add') as NodeListOf<Element>;
    this.modalTrigger = document.getElementById('modal-trigger') as HTMLButtonElement;
  }

  public updateActualGoods(event: Event): void {
    this.shopingCartAdd = document.querySelectorAll('.shoping-cart-add') as NodeListOf<Element>;
    for (const good of this.shopingCartAdd) {
      good.addEventListener('click', this.addToCart.bind(this));
      this.addToCart(event);
    }
  }

  private addToCart(event: Event): void {
    // console.log(event);
    this.shopingCartNotification.innerHTML = localStorage.getItem('cartQuantity') || '0';
    let value = Number(this.shopingCartNotification.innerHTML);

    if (event.type === 'DOMContentLoaded' || !(event.target as HTMLElement).classList.contains('shoping-cart-add')) {
      for (const key in localStorage) {
        if (!localStorage.hasOwnProperty(key)) {
          continue;
        }

        if (key.includes('cartGood')) {
          const id: string = localStorage.getItem(`${key}`) as string;
          const good: HTMLElement | null = document.getElementById(`${id}`);
          if (good) {
            good.classList.remove('btn-primary');
            good.classList.add('btn-success');
            good.innerHTML = 'В корзине!';
          }
        }
      }
      return;
    }

    if ((event.target as HTMLElement).classList.contains('shoping-cart-add')) {
      if (value === 20 && (event.target as HTMLElement).innerHTML !== 'В корзине!') {
        const event = new Event('click');
        this.modalTrigger.dispatchEvent(event);
        return;
      }

      (event.target as HTMLElement).classList.toggle('btn-primary');
      (event.target as HTMLElement).classList.toggle('btn-success');

      if ((event.target as HTMLElement).innerHTML === 'Добавить в корзину') {
        (event.target as HTMLElement).innerHTML = 'В корзине!';
      } else {
        (event.target as HTMLElement).innerHTML = 'Добавить в корзину';
        this.shopingCartNotification.innerHTML = String(--value);
        localStorage.removeItem(`cartGood-${(event.target as HTMLElement).id}`);
        localStorage.setItem('cartQuantity', `${value}`);
        return;
      }

      this.shopingCartNotification.innerHTML = String(++value);
      localStorage.setItem('cartQuantity', `${value}`);
      localStorage.setItem(`cartGood-${(event.target as HTMLElement).id}`, `${(event.target as HTMLElement).id}`);
    }
  }
}
export default ShoppingCart;
