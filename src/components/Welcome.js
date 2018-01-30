import { h, render, Component } from 'preact';

export default class Welcome extends Component {
  render() {
    return <h2>Hello sweet {this.props.name}</h2>;
  }
}