import { FC, SetStateAction } from "react";
import { MOCKED_SUBCATEGORIES_SPORTS, MOCKED_SUBCATEGORIES_CULTURE, SubCategory, TrendingCategory, MOCKED_SUBCATEGORIES_GAMING } from "./TrendingCategory.tsx";
import { useEffect } from 'react';

export interface SearchByTrendingProps {
  setSubcategory: React.Dispatch<SetStateAction<SubCategory | null>>;
  setCategory: React.Dispatch<SetStateAction<string | null>>;
}

export const SearchByTrending: FC<SearchByTrendingProps> = (({ setSubcategory, setCategory }) => {
  return (
    <div id="categories" style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '24px',
      isolation: 'isolate',
      zIndex: '0',
    }}>
      <TrendingCategory categoryName={'Trending in Sports'} subCategories={MOCKED_SUBCATEGORIES_SPORTS} setSubcategory={setSubcategory} setCategory={setCategory} />
      <TrendingCategory categoryName={'Trending in Travel'} subCategories={MOCKED_SUBCATEGORIES_CULTURE} setSubcategory={setSubcategory} setCategory={setCategory} />
      <TrendingCategory categoryName={'Trending in Gaming'} subCategories={MOCKED_SUBCATEGORIES_GAMING} setSubcategory={setSubcategory} setCategory={setCategory} />
      <TrendingCategory categoryName={'Trending in Bike'} subCategories={[]} setSubcategory={setSubcategory} setCategory={setCategory} />
    </div>
  );
})
