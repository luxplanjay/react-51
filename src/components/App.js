import { useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { getBreeds, getDogByBreed } from 'api';
import { BreedSelect } from './BreedSelect';
import { Dog } from './Dog';
import { DogSkeleton } from './DogSkeleton';
import { useEffect, useCallback } from 'react';

export const App = () => {
  const [breeds, setBreeds] = useState([]);
  const [isLoadingBreeds, setIsLoadingBreeds] = useState(false);
  const [selectedBreed, setSelectedBreed] = useState(null);
  const [error, setError] = useState(null);

  const [dog, setDog] = useState(null);
  const [isLoadingDog, setIsLoadingDog] = useState(false);

  const fetchDog = useCallback(async () => {
    try {
      setIsLoadingDog(true);
      const dog = await getDogByBreed(selectedBreed);
      setDog(dog);
    } catch {
      setError('Failed to load dog :(');
    } finally {
      setIsLoadingDog(false);
    }
  }, [selectedBreed]);

  useEffect(() => {
    async function fetchBreeds() {
      try {
        setIsLoadingBreeds(true);
        const breeds = await getBreeds();
        setBreeds(breeds);
      } catch {
        setError('Failed to load breeds :(');
      } finally {
        setIsLoadingBreeds(false);
      }
    }

    fetchBreeds();
  }, []);

  useEffect(() => {
    if (selectedBreed !== null) {
      fetchDog();
    }
  }, [fetchDog, selectedBreed]);

  useEffect(() => {
    if (error !== null) {
      toast.error(error);
    }
  }, [error]);

  return (
    <div style={{ display: 'grid', gap: 16, padding: 16 }}>
      <BreedSelect
        breeds={breeds}
        isLoading={isLoadingBreeds}
        onSelect={setSelectedBreed}
      />
      {error && <div style={{ color: 'red' }}>{error}</div>}
      {isLoadingDog && <DogSkeleton />}
      {dog && !isLoadingDog && (
        <div>
          <Dog dog={dog} />
          <button onClick={fetchDog}>Show different picture</button>
        </div>
      )}
      <Toaster position="bottom-right" />
    </div>
  );
};
