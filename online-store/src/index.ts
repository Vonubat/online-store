import './styles/normalize.css';
import './styles/main.scss';
import 'bootstrap';
// import * as bootstrap from 'bootstrap';
import Executor from './components/controller/executor';

const executer: Executor = new Executor();
executer.execute();

// test for btn
const btn = document.getElementById('button-addon1');
btn?.addEventListener('mouseleave', btn.blur);
