import { IGoodDeatails } from '../types/index';

class Generator {
  modalWindow: HTMLDivElement;
  modalTrigger: HTMLButtonElement;

  constructor() {
    this.modalWindow = document.getElementById('modal-window') as HTMLDivElement;
    this.modalTrigger = document.getElementById('modal-trigger') as HTMLButtonElement;
  }

  generate(data: IGoodDeatails[]): void {
    const goods: IGoodDeatails[] = data;
    if (goods.length === 0) {
      const event: Event = new Event('click');
      this.modalTrigger.dispatchEvent(event);
    }
    const sectionCardsContainer = document.getElementById('cards-container') as HTMLElement;

    if (sectionCardsContainer.childNodes.length > 0) {
      while (sectionCardsContainer.firstChild) {
        sectionCardsContainer.removeChild(sectionCardsContainer.firstChild);
      }
    }

    for (let i = 0; i < goods.length; i++) {
      const divCard: HTMLDivElement = document.createElement('div');
      divCard.classList.add('card', 'me-3', 'mt-3', 'mb-3');

      sectionCardsContainer.append(divCard);

      const imgCard: HTMLImageElement = document.createElement('img');
      imgCard.classList.add('card-img-top', 'mt-1');
      imgCard.setAttribute('src', `./assets/goods-img/${goods[i].slug}.jpeg`);
      imgCard.setAttribute('alt', `${goods[i].phone_name} picture`);
      divCard.append(imgCard);

      const divCardBody: HTMLDivElement = document.createElement('div');
      divCardBody.classList.add('card-body');
      divCard.append(divCardBody);

      const hPhoneName: HTMLHeadElement = document.createElement('h5');
      hPhoneName.classList.add('card-title');
      hPhoneName.textContent = `${goods[i].phone_name}`;
      divCardBody.append(hPhoneName);

      const pBrand: HTMLParagraphElement = document.createElement('p');
      pBrand.classList.add('card-text');
      pBrand.innerText = `Производитель: ${goods[i].brand}`;
      divCardBody.append(pBrand);

      const pYear: HTMLParagraphElement = document.createElement('p');
      pYear.classList.add('card-text');
      pYear.innerText = `Год выхода: ${goods[i].year}`;
      divCardBody.append(pYear);

      const pColor: HTMLParagraphElement = document.createElement('p');
      pColor.classList.add('card-text');
      pColor.innerText = `Цвет: ${goods[i].color}`;
      divCardBody.append(pColor);

      const pCamera: HTMLParagraphElement = document.createElement('p');
      pCamera.classList.add('card-text');
      pCamera.innerText = `Количество камер: ${goods[i].camera}`;
      divCardBody.append(pCamera);

      const pPopular: HTMLParagraphElement = document.createElement('p');
      pPopular.classList.add('card-text');
      if (goods[i].popular) {
        pPopular.innerText = `Популярный: да`;
      } else {
        pPopular.innerText = `Популярный: нет`;
      }
      divCardBody.append(pPopular);

      const pQuantity: HTMLParagraphElement = document.createElement('p');
      pQuantity.classList.add('fw-bolder', 'text-primary');
      pQuantity.innerText = `Количество: ${goods[i].quantity}`;
      divCardBody.append(pQuantity);

      const pPrice: HTMLParagraphElement = document.createElement('p');
      pPrice.classList.add('fw-bolder', 'text-primary');
      pPrice.innerText = `Цена: ${goods[i].price} $`;
      divCardBody.append(pPrice);

      const divSlug: HTMLDivElement = document.createElement('div');
      divSlug.classList.add('visually-hidden');
      divSlug.innerText = `${goods[i].slug}`;
      divCardBody.append(divSlug);

      const divCardFooter: HTMLDivElement = document.createElement('div');
      divCardFooter.classList.add('card-footer');
      divCard.append(divCardFooter);

      const buttonBasket: HTMLButtonElement = document.createElement('button');
      buttonBasket.classList.add('btn', 'btn-primary');
      buttonBasket.setAttribute('type', `button`);
      buttonBasket.innerText = `Добавить в корзину `;
      divCardFooter.append(buttonBasket);

      const spanBasketNotifications: HTMLSpanElement = document.createElement('span');
      spanBasketNotifications.classList.add('badge', 'bg-success');
      spanBasketNotifications.innerText = `0`;
      buttonBasket.append(spanBasketNotifications);
    }
  }
}

export default Generator;
