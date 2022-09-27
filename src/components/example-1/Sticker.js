import { Component } from 'react';

export class Sticker extends Component {
  state = {
    isOpen: false,
  };

  toggle = () => {
    this.setState(prevState => {
      return {
        isOpen: !prevState.isOpen,
      };
    });
  };

  render() {
    const { isOpen } = this.state;
    const {
      sticker: { img, label },
    } = this.props;

    return (
      <div
        style={{ border: '1px solid black', padding: 8, borderRadius: 8 }}
        onClick={this.toggle}
      >
        <img src={img} alt={label} width={120} />
        {isOpen && <p style={{ marginBottom: 0 }}>{label}</p>}
      </div>
    );
  }
}
