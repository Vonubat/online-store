import './styles/normalize.css';
import './styles/main.scss';
import 'bootstrap';
// import * as bootstrap from 'bootstrap';

// test for btn
const btn = document.getElementById('button-addon1');
btn?.addEventListener('mouseleave', btn.blur);
