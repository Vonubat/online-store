import { IGoodDeatails, TCameraValue, allCameras } from '../types/index';

export class Camera {
  camera1: HTMLInputElement;
  camera2: HTMLInputElement;
  camera3: HTMLInputElement;
  camera4: HTMLInputElement;

  constructor() {
    this.camera1 = document.getElementById('camera1') as HTMLInputElement;
    this.camera2 = document.getElementById('camera2') as HTMLInputElement;
    this.camera3 = document.getElementById('camera3') as HTMLInputElement;
    this.camera4 = document.getElementById('camera4') as HTMLInputElement;
  }

  camera(data: IGoodDeatails[], cameraStorage: TCameraValue[]): IGoodDeatails[] {
    allCameras.forEach((item: TCameraValue): false => (this[`camera${item}`].checked = false));
    cameraStorage.forEach((item: TCameraValue): true => (this[`camera${item}`].checked = true));

    return data.filter((item: IGoodDeatails): IGoodDeatails | undefined => {
      if (cameraStorage.some((camera: TCameraValue): boolean => item.camera === camera)) {
        return item;
      } else return;
    });
  }
}

export default Camera;
