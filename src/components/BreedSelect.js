import { useMemo } from 'react';
import Select from 'react-select';

export const BreedSelect = ({ breeds, isLoading, onSelect }) => {
  const options = useMemo(() => {
    return breeds.map(breed => ({
      value: breed.id,
      label: breed.name
    }));
  }, [breeds]);

  const handleChange = option => onSelect(option.value);

  return (
    <Select options={options} isLoading={isLoading} onChange={handleChange} />
  );
};
