export const Sticker = ({ sticker: { img, label } }) => {
  return (
    <div style={{ border: '1px solid black', padding: 8, borderRadius: 8 }}>
      <img src={img} alt={label} width={120} />
      <p style={{ marginBottom: 0 }}>{label}</p>
    </div>
  );
};
