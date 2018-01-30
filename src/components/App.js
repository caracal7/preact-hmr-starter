import { h, render, Component } from 'preact';
import Welcome from './Welcome';

export default class App extends Component {
  constructor () {
    super()
  }
  render() {
    return (
      <section>
        <header>
          <h1>Hot Module Replacement</h1>
          <p>Test Webpack's HMR in combination with Preact</p>
        </header>
        <Welcome name="Sara" />
      </section>
    );
  }
}