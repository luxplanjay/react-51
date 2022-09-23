import { Wrapper, Title, BadgeList, Badge } from './RecipeDifficulty.styled';

const difficulties = Object.freeze({
  easy: 'easy',
  medium: 'medium',
  hard: 'hard',
});

export const RecipeDifficulty = ({ difficulty }) => {
  return (
    <Wrapper>
      <Title>Difficulty</Title>
      <BadgeList>
        <Badge selected={difficulty === difficulties.easy}>Easy</Badge>
        <Badge selected={difficulty === difficulties.medium}>Medium</Badge>
        <Badge selected={difficulty === difficulties.hard}>Hard</Badge>
      </BadgeList>
    </Wrapper>
  );
};
