import {FC} from "react";
import {TrendingCategoryCard} from "./TrendingCategoryCard.tsx";

interface SearchByTrendingProps {}

export const SearchByTrending: FC<SearchByTrendingProps> = (() => {
  return (
    <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
    height: '480px',
    borderRight: 'solid 4px',
    borderColor: '#EFEFEF',
    paddingRight: '32px',
  }}>
      <TrendingCategoryCard heading={'Trending in Sports'} volume={'2.9K'} growth={'+9500%'}/>
      <TrendingCategoryCard heading={'Trending in Culture'} volume={'2.9K'} growth={'+9500%'}/>
      <TrendingCategoryCard heading={'Focus Trends in 2024'} volume={'2.9K'} growth={'+9500%'}/>
    </div>
  );
})