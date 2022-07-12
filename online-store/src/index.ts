import './styles/normalize.css';
import './styles/main.scss';
import 'bootstrap';
// import * as bootstrap from 'bootstrap';
import Observer from './components/controller/observer';

const observer: Observer = new Observer();
observer.observeSearch();
observer.observeColor();
observer.observeCamera();
