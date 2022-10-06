export const Dog = ({ dog: { url, breeds } }) => {
  const { name, bred_for, temperament } = breeds[0];

  return (
    <div style={{ display: 'flex', gap: 16 }}>
      <img
        src={url}
        alt={name}
        width="320"
        style={{ width: 320, objectFit: 'cover' }}
      />
      <div>
        <p>{name}</p>
        <p>{bred_for}</p>
        <p>{temperament}</p>
      </div>
    </div>
  );
};
