import App from './components/App';
import { h, render, Component } from 'preact';
import './styles.css';

// Hold rendered root element to re-render in response to HMR updates.
let root;

const init = () => {
  root = render(<App />, document.body, root);
}

init();

// Webpack Hot Module Replacement API
if (module.hot) {
  module.hot.accept('./components/App', init);
}
