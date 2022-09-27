export const Sticker = ({ sticker: { img, label }, onSelect, selected }) => {
  return (
    <div
      style={{ border: '1px solid black', padding: 8, borderRadius: 8 }}
      onClick={() => onSelect(img)}
    >
      <img src={img} alt={label} width={120} />
      {selected && <p style={{ marginBottom: 0 }}>{label}</p>}
    </div>
  );
};
