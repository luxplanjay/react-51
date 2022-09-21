import recipes from '../recipes.json';
import { RecipeList } from './RecipeList/RecipeList';

export const App = () => {
  return (
    <>
      <RecipeList recipes={recipes} />
    </>
  );
};
