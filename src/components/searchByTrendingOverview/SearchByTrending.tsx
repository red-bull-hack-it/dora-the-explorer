import {FC, SetStateAction} from "react";
import {MOCKED_SUBCATEGORIES, SubCategory, TrendingCategory} from "./TrendingCategory.tsx";

export interface SearchByTrendingProps {
  setSubcategory: React.Dispatch<SetStateAction<SubCategory | null>>;
}

export const SearchByTrending: FC<SearchByTrendingProps> = (({ setSubcategory }) => {
  return (
    <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '24px',
  }}>
      <TrendingCategory categoryName={'Trending in Sports'} subCategories={MOCKED_SUBCATEGORIES} setSubcategory={setSubcategory}/>
      <TrendingCategory categoryName={'Trending in Culture'} subCategories={MOCKED_SUBCATEGORIES} setSubcategory={setSubcategory}/>
    </div>
  );
})