import stickers from '../../stickers.json';
import { StickerList } from './StickerList';

export const App = () => {
  return (
    <>
      <h1>Example 2</h1>
      <StickerList stickers={stickers} />
    </>
  );
};
