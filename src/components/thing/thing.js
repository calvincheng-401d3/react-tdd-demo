import React from "react";
import "./thing.scss";

class Thing extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      stuff: true
    };
  }

  handleClick = () => {
    let stuff = !this.state.stuff;
    let polarity = stuff ? "positive" : "negative";
    this.setState({ stuff, polarity });
  };

  render() {
    let classes = ["thing", this.state.polarity].join(" ");
    return (
      <section className={classes}>
        <span>Stuff: {this.state.stuff.toString()} </span>
        <button onClick={this.handleClick}>Click Me Now</button>
      </section>
    );
  }
}

export default Thing;
