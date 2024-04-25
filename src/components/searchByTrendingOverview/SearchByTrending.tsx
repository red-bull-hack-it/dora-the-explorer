import { FC, SetStateAction } from "react";
import { MOCKED_SUBCATEGORIES_SPORTS, MOCKED_SUBCATEGORIES_CULTURE, SubCategory, TrendingCategory } from "./TrendingCategory.tsx";

export interface SearchByTrendingProps {
  setSubcategory: React.Dispatch<SetStateAction<SubCategory | null>>;
  setCategory: React.Dispatch<SetStateAction<string | null>>;
}

export const SearchByTrending: FC<SearchByTrendingProps> = (({ setSubcategory, setCategory }) => {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '24px',
    }}>
      <TrendingCategory categoryName={'Trending in Sports'} subCategories={MOCKED_SUBCATEGORIES_SPORTS} setSubcategory={setSubcategory} setCategory={setCategory} />
      <TrendingCategory categoryName={'Trending in Travel'} subCategories={MOCKED_SUBCATEGORIES_CULTURE} setSubcategory={setSubcategory} setCategory={setCategory} />
    </div>
  );
})
