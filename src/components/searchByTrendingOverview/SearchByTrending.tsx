import {FC} from "react";
import {GravityButton} from "@gravity/web-components-react";

interface SearchByTrendingProps {}

export const SearchByTrending: FC<SearchByTrendingProps> = (() => {
  return (
    <div style={{
    display: 'flex',
    flexDirection: 'row',
    gap: '16px',
    height: '480px',
    borderRight: 'solid 4px white',
    paddingRight: '32px',
  }}>
    <GravityButton onClick={() => console.log('TODO implement search!')}>
      Search
    </GravityButton>
  </div>
  );
})