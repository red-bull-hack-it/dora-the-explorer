import {FC} from "react";
import {
  GravityButton,
  GravityCard,
  GravityCategoryBadge, GravityHeading,
  GravityIcon,
  GravityText
} from "@gravity/web-components-react";
import {SearchByTrendingProps} from "./SearchByTrending.tsx";

interface TrendingCategoryCardProps extends Pick<SearchByTrendingProps, 'setSubcategory'> {
  heading: string;
  volume: string;
  growth: string;
}

export const TrendingCategoryCard: FC<TrendingCategoryCardProps> = (({ heading, volume, growth, setSubcategory}) => {
  return (
    <GravityCard type="vertical">
      <div slot="heading">
        <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', width: '256px' }}>
          <GravityHeading size={'small'} weight={'bold'}>{heading}</GravityHeading>
          <GravityCategoryBadge category={'blueberry'} size={'small'}>Exploding</GravityCategoryBadge>
        </div>
      </div>
      <div slot="image" style={{display: 'grid', placeContent: 'center'}}>
        <GravityIcon name={'trending'} size="xx-large" color="light"></GravityIcon>
      </div>
      <div slot="meta" style={{display: 'flex', gap: '8px'}}>
        <div style={{display: 'flex', gap: '4px', alignItems: 'center'}}>
          <GravityText color="dark-subtle" size="xx-small">
            Volume:
          </GravityText>
          <GravityCategoryBadge category={'tonic'} size={'small'}>
            {volume}
          </GravityCategoryBadge>
        </div>
        <div style={{display: 'flex', gap: '4px', alignItems: 'center'}}>
          <GravityText color="dark-subtle" size="xx-small">
            Growth:
          </GravityText>
          <GravityCategoryBadge category={'lime'} size={'small'}>
            {growth}
          </GravityCategoryBadge>
        </div>
        <div slot="cta" style={{ display: 'flex', gap: '8px'}}>
          <GravityButton type="secondary" size="small">
            Explore
          </GravityButton>
          <GravityButton type="primary" size="small" onClick={() => setSubcategory({
            growth, heading, volume
          })}>
            Create Content
          </GravityButton>
        </div>
      </div>
    </GravityCard>
  )
})