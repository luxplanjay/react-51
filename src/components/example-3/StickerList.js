import { Sticker } from './Sticker';

export const StickerList = ({ stickers, onSelect, selectedSticker }) => {
  return (
    <ul style={{ display: 'flex', gap: 8, padding: 8, listStyle: 'none' }}>
      {stickers.map((sticker, idx) => (
        <li key={idx}>
          <Sticker
            sticker={sticker}
            onSelect={onSelect}
            selected={selectedSticker === sticker.img}
          />
        </li>
      ))}
    </ul>
  );
};
