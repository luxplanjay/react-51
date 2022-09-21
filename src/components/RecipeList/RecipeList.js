import PropTypes from 'prop-types';
import { Recipe } from 'components/Recipe/Recipe';
import { List } from './RecipeList.styled';

export const RecipeList = ({ recipes }) => {
  return (
    <List>
      {recipes.map((recipe, idx) => (
        <li key={idx}>
          <Recipe recipe={recipe} />
        </li>
      ))}
    </List>
  );
};

RecipeList.propTypes = {
  recipes: PropTypes.array.isRequired,
};
