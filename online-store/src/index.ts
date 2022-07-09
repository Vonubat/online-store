import './styles/normalize.css';
import './styles/main.scss';
import 'bootstrap';
// import * as bootstrap from 'bootstrap';
import Loader from './components/controller/loader';

const loader: Loader = new Loader();
loader.load();

// test for btn
const btn = document.getElementById('button-addon1');
btn?.addEventListener('mouseleave', btn.blur);
