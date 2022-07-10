import './styles/normalize.css';
import './styles/main.scss';
import 'bootstrap';
// import * as bootstrap from 'bootstrap';
import Observer from './components/controller/observer';

const observer: Observer = new Observer();
observer.observe();

// test for btn
const btn = document.getElementById('button-addon1');
btn?.addEventListener('mouseleave', btn.blur);
