import {FC} from "react";
import {
  GravityButton,
  GravityCard,
  GravityCategoryBadge,
  GravityIcon,
  GravityText
} from "@gravity/web-components-react";

interface TrendingCategoryCardProps {
  heading: string;
  volume: string;
  growth: string;
}

export const TrendingCategoryCard: FC<TrendingCategoryCardProps> = (({ heading, volume, growth}) => {
  return (
    <GravityCard heading={heading} type="standard" style={{minWidth: '840px'}}>
      <div slot="image" style={{display: 'grid', placeContent: 'center'}}>
        <GravityIcon name={'trending'} size="xx-large" color="light"></GravityIcon>
      </div>
      <div slot="content" style={{display: 'flex', justifyContent: 'start', paddingTop: '4px'}}>
        <GravityCategoryBadge category={'blueberry'} size={'small'}>Exploding</GravityCategoryBadge>
      </div>
      <div slot="cta">
        <GravityButton type="secondary" size="small">
          Explore
        </GravityButton>
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
      </div>
    </GravityCard>
  )
})