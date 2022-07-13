import './styles/normalize.css';
import './styles/main.scss';
import 'bootstrap';
import Observer from './components/controller/observer';

const observer: Observer = new Observer();
observer.observeDOMContentLoaded();
observer.observeSearch();
observer.observeColor();
observer.observeCamera();
observer.observeBrand();
observer.observePopular();
observer.observeResetLocalStorage();
observer.observeSort();
observer.observeSliders();
