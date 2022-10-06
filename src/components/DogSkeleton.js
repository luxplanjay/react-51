import ContentLoader from 'react-content-loader';

export const DogSkeleton = () => {
  return (
    <ContentLoader
      speed={2}
      width={400}
      height={460}
      viewBox="0 0 400 460"
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb"
    >
      <rect x="21" y="-29" rx="2" ry="2" width="480" height="320" />
      <rect x="27" y="312" rx="0" ry="0" width="176" height="33" />
    </ContentLoader>
  );
};
