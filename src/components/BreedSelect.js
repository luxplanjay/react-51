import Select from 'react-select';

export const BreedSelect = ({ breeds, isLoading, onSelect }) => {
  const options = breeds.map(breed => ({
    value: breed.id,
    label: breed.name
  }));

  const handleChange = option => onSelect(option.value);

  return (
    <Select options={options} isLoading={isLoading} onChange={handleChange} />
  );
};
