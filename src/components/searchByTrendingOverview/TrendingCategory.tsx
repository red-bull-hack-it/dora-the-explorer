import {FC} from "react";
import {TrendingCategoryCard} from "./TrendingCategoryCard.tsx";
import {GravityButton, GravityHeading} from "@gravity/web-components-react";

export interface SubCategory {
  heading: string;
  volume: string;
  growth: string;
}

export interface TrendingCategoryProps {
  subCategories: SubCategory[];
  categoryName: string;
}

export const MOCKED_SUBCATEGORIES: SubCategory[] = [
  { heading: 'Bassdash', volume: '2.9K', growth: '+9500%'},
  { heading: 'Padel Balls', volume: '2.9K', growth: '+9500%'},
  { heading: 'Owala', volume: '2.9K', growth: '+9500%'},
]

export const TrendingCategory: FC<TrendingCategoryProps> = (({ categoryName, subCategories}) => {
  return (
    <div style={{ textAlign: 'start', display: 'flex', flexDirection: 'column', gap: '8px' }}>
      <GravityHeading size={'medium'} weight={'bold'}>{categoryName}</GravityHeading>
      <div style={{ display: 'flex', gap: '8px', flexDirection: 'row' }}>
        {subCategories.map(({ heading, volume, growth }) => {
          return <TrendingCategoryCard heading={heading} volume={volume} growth={growth}/>
        })}
      </div>
      <div style={{ marginTop: '8px', alignSelf: 'center' }}>
        <GravityButton type={'secondary'}>Load more</GravityButton>
      </div>
    </div>
  )
})