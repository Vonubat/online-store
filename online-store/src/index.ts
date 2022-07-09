import './styles/normalize.css';
import './styles/main.scss';
import 'bootstrap';
// import * as bootstrap from 'bootstrap';
import Generator from './components/controller/generator';

const generator: Generator = new Generator();
generator.generate();

// test for btn
const btn = document.getElementById('button-addon1');
btn?.addEventListener('mouseleave', btn.blur);
