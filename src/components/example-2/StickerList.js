import { Component } from 'react';
import { Sticker } from './Sticker';

export class StickerList extends Component {
  state = {
    selectedSticker: null,
  };

  handleSelect = stickerImg => {
    this.setState({ selectedSticker: stickerImg });
  };

  render() {
    const { stickers } = this.props;
    return (
      <ul style={{ display: 'flex', gap: 8, padding: 8, listStyle: 'none' }}>
        {stickers.map((sticker, idx) => (
          <li key={idx}>
            <Sticker
              sticker={sticker}
              selected={this.state.selectedSticker === sticker.img}
              onSelect={this.handleSelect}
            />
          </li>
        ))}
      </ul>
    );
  }
}
