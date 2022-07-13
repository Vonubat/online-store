import './styles/normalize.css';
import './styles/main.scss';
import 'bootstrap';
import Observer from './components/controller/observer';
import Sliders from './components/view/sliders';

const observer: Observer = new Observer();
const sliders: Sliders = new Sliders();
sliders.create();
observer.observeDOMContentLoaded();
observer.observeSearch();
observer.observeColor();
observer.observeCamera();
observer.observeBrand();
observer.observePopular();
observer.observeResetLocalStorage();
observer.observeSort();
