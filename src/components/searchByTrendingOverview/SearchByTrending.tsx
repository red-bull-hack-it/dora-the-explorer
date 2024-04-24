import {FC} from "react";
import {MOCKED_SUBCATEGORIES, TrendingCategory} from "./TrendingCategory.tsx";

interface SearchByTrendingProps {}

export const SearchByTrending: FC<SearchByTrendingProps> = (() => {
  return (
    <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '24px',
    height: '480px',
  }}>
      <TrendingCategory categoryName={'Trending in Sports'} subCategories={MOCKED_SUBCATEGORIES}/>
      <TrendingCategory categoryName={'Trending in Culture'} subCategories={MOCKED_SUBCATEGORIES}/>
    </div>
  );
})