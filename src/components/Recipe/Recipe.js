import PropTypes from 'prop-types';
import { HiOutlineChartBar, HiOutlineChartPie } from 'react-icons/hi';
import { BsAlarm } from 'react-icons/bs';
import { RecipeDifficulty } from 'components/RecipeDifficulty/RecipeDifficulty';
import {
  Card,
  InfoContainer,
  RecipeName,
  InfoBlock,
  Label,
} from './Recipe.styled';

export const Recipe = ({
  recipe: { name, time, servings, calories, difficulty },
}) => {
  return (
    <Card>
      <RecipeName>{name}</RecipeName>
      <InfoContainer>
        <InfoBlock>
          <HiOutlineChartBar size={24} />
          <Label>{time} min</Label>
        </InfoBlock>
        <InfoBlock>
          <HiOutlineChartPie size={24} />
          <Label>{servings} servings</Label>
        </InfoBlock>
        <InfoBlock>
          <BsAlarm size={24} />
          <Label>{calories} calories</Label>
        </InfoBlock>
      </InfoContainer>
      <RecipeDifficulty difficulty={difficulty} />
    </Card>
  );
};

Recipe.propTypes = {
  recipe: PropTypes.shape({
    name: PropTypes.string.isRequired,
    time: PropTypes.string.isRequired,
    servings: PropTypes.number.isRequired,
    calories: PropTypes.number.isRequired,
    difficulty: PropTypes.oneOf(['easy', 'medium', 'hard']),
  }),
};
