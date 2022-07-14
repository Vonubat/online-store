import { IGoodDeatails } from '../types/index';

export class Popular {
  public popular: HTMLImageElement;
  constructor() {
    this.popular = document.getElementById('popular') as HTMLImageElement;
  }

  public favorites(event: Event, data: IGoodDeatails[]): IGoodDeatails[] {
    let tempData: IGoodDeatails[] = data;
    // implementation, when was dispatched target event
    if ((event.target as HTMLElement).id === 'popular') {
      if (localStorage.getItem('popular')) {
        localStorage.removeItem('popular');
        this.popular.classList.remove('animation');
      } else {
        localStorage.setItem('popular', 'true');
        this.popular.classList.add('animation');

        tempData = data.filter((item: IGoodDeatails): IGoodDeatails | undefined => {
          if (item.popular === true) {
            return item;
          } else return;
        });
      }
    } else {
      //implementation, when was dispatched non-target event
      if (localStorage.getItem('popular')) {
        tempData = data.filter((item: IGoodDeatails): IGoodDeatails | undefined => {
          if (item.popular === true) {
            return item;
          } else return;
        });

        this.popular.classList.add('animation');
      } else {
        this.popular.classList.remove('animation');
      }
    }
    return tempData;
  }
}
export default Popular;
