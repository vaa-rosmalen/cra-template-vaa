import ReactDOM from 'react-dom';
import './index.scss';
import { App } from 'app';
import * as serviceWorker from './serviceWorker';
import './utilities/i18n';
import reportWebVitals from './utilities/report-web-vitals';

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals(console.log);
