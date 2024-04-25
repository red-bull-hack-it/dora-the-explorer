import {FC} from "react";
import {TrendingCategoryCard} from "./TrendingCategoryCard.tsx";
import {GravityButton, GravityHeading} from "@gravity/web-components-react";
import {SearchByTrendingProps} from "./SearchByTrending.tsx";

export interface SubCategory {
  heading: string;
  volume: string;
  growth: string;
}

export interface TrendingCategoryProps extends Pick<SearchByTrendingProps, 'setSubcategory' | 'setCategory'> {
  subCategories: SubCategory[];
  categoryName: string;
}

export const MOCKED_SUBCATEGORIES: SubCategory[] = [
  { heading: 'Bassdash', volume: '2.9K', growth: '+9500%'},
  { heading: 'Padel Balls', volume: '2.9K', growth: '+9500%'},
  { heading: 'Owala', volume: '2.9K', growth: '+9500%'},
]

export const TrendingCategory: FC<TrendingCategoryProps> = (({ categoryName, subCategories, setSubcategory, setCategory}) => {
  return (
    <div style={{ textAlign: 'start', display: 'flex', flexDirection: 'column', gap: '8px' }}>
      <GravityHeading size={'x-large'} weight={'bold'} style={{ paddingBottom: '24px' }}>{categoryName}</GravityHeading>
      <div style={{ display: 'flex', gap: '8px', flexDirection: 'row' }}>
        {subCategories.map(({ heading, volume, growth }, index) => {
          return <TrendingCategoryCard heading={heading} volume={volume} growth={growth} setSubcategory={setSubcategory} setCategory={() => setCategory(categoryName)} src={index + 1}/>
        })}
      </div>
      <div style={{ marginTop: '8px', alignSelf: 'center' }}>
        <GravityButton type={'secondary'}>Load more</GravityButton>
      </div>
    </div>
  )
})