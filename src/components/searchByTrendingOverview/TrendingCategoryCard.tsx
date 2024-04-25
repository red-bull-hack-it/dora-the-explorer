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
  src: number;
  setCategory: () => void;
}

export const TrendingCategoryCard: FC<TrendingCategoryCardProps> = (({ heading, volume, growth, setSubcategory, setCategory, src}) => {
  return (
    <GravityCard type="vertical" imgSrc={`graph-${src}.png`}>
      <div slot="heading">
        <div style={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          width: '256px'
        }}>
          <GravityHeading size={'small'} weight={'bold'}>{heading}</GravityHeading>
        </div>
      </div>
      <div slot="content">
        <GravityText color={'dark-subtle'} weight={'regular'} size="x-small">
          {'Some subheading'}
        </GravityText>
      </div>
      <div slot="meta">
        <div style={{display: 'flex', gap: '8px', flexDirection: 'row', paddingBottom: '12px'}}>
          <GravityCategoryBadge category={'tonic'} size={'small'}>
            Volume:
            <GravityText color="dark" weight={'bold'} size="xx-small">
              {' ' + volume}
            </GravityText>
          </GravityCategoryBadge>
          <GravityCategoryBadge category={'lime'} size={'small'}>
            <GravityIcon name='trending' style={{marginRight: '2px'}}></GravityIcon>
            Growth:
            <GravityText color="dark" weight={'regular'} size={'xx-small'}>
              {' ' + growth}
            </GravityText>
          </GravityCategoryBadge>
        </div>
        <div slot="cta" style={{display: 'flex', gap: '8px'}}>
          <GravityButton type="secondary" size="small">
            Explore
          </GravityButton>
          <GravityButton type="primary" size="small" onClick={() => {
            setSubcategory({
              growth, heading, volume
            });
            setCategory();
            window.scrollTo(0, 0);
          }}>
            Create Content
          </GravityButton>
        </div>
      </div>
    </GravityCard>
  )
})