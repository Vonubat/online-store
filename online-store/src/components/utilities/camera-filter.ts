import { IGoodDeatails, TCameraValue, allCameras } from '../types/index';

export class Camera {
  public camera1: HTMLInputElement;
  public camera2: HTMLInputElement;
  public camera3: HTMLInputElement;
  public camera4: HTMLInputElement;

  constructor() {
    this.camera1 = document.getElementById('camera1') as HTMLInputElement;
    this.camera2 = document.getElementById('camera2') as HTMLInputElement;
    this.camera3 = document.getElementById('camera3') as HTMLInputElement;
    this.camera4 = document.getElementById('camera4') as HTMLInputElement;
  }

  public camera(event: Event, data: IGoodDeatails[]): IGoodDeatails[] {
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
      tempData = data;
    } else {
      tempData = cameraStorage.reduce((previousData: IGoodDeatails[]): IGoodDeatails[] => {
        return previousData.filter((item: IGoodDeatails): IGoodDeatails | undefined => {
          if (cameraStorage.some((camera: TCameraValue): boolean => item.camera === camera)) {
            return item;
          } else return;
        });
      }, data);
    }

    allCameras.forEach((item: TCameraValue): false => (this[`camera${item}`].checked = false));
    cameraStorage.forEach((item: TCameraValue): true => (this[`camera${item}`].checked = true));

    return tempData;
  }
}

export default Camera;
