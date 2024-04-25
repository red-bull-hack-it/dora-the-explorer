import { FC } from "react";
import { TrendingCategoryCard } from "./TrendingCategoryCard.tsx";
import { GravityButton, GravityHeading } from "@gravity/web-components-react";
import { SearchByTrendingProps } from "./SearchByTrending.tsx";
import sportsJson from '../../factories/sports.json';
import travelJson from '../../factories/travel.json';
import gamingJson from '../../factories/gaming.json';

export interface SubCategory {
  heading: string;
  volume: string;
  growth: string;
}

export interface TrendingCategoryProps extends Pick<SearchByTrendingProps, 'setSubcategory' | 'setCategory'> {
  subCategories: SubCategory[];
  categoryName: string;
}

type SearchHistoryItem = {
  value: number;
  time: string;
};

type SearchHistory = {
  last_15_years: SearchHistoryItem[];
  growth: Growth;
};

type Growth = Record<string, number>;

type Data = {
  keyword: string;
  absolute_volume: string;
  search_history: SearchHistory;
};



const mapJson = (json: { total?: number; result: any; }) => json.result.map((sports: unknown) => {
  const x = sports as unknown as Data
  console.log(sports, x, 'SPORTS')
  const history = x.search_history
  console.log(history?.growth[120])
  return {
    heading: x.keyword ?? 'Padel courts',
    volume: formatNumber(x.absolute_volume as unknown as number),
    growth: x.search_history?.growth[120] ?? '100'
  }
})

const sportsMocked = mapJson(sportsJson)
const travelMocked = mapJson(travelJson)
const gamingMocked = mapJson(gamingJson)


console.log(travelJson.result)

function formatNumber(num: number): string {
  const suffixes = ["", "k", "M", "B", "T"];
  const suffixNum = Math.floor(("" + num).length / 3);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  let shortValue: any = parseFloat((suffixNum !== 0 ? (num / Math.pow(1000, suffixNum)) : num).toPrecision(2));
  if (shortValue % 1 !== 0) {
    shortValue = shortValue.toFixed(1);
  }
  const x = shortValue + suffixes[suffixNum];
  if (x.includes('NaN')) {
    return '2.9K'
  }
  return x
}

// eslint-disable-next-line react-refresh/only-export-components
export const MOCKED_SUBCATEGORIES_SPORTS: SubCategory[] = sportsMocked
export const MOCKED_SUBCATEGORIES_CULTURE: SubCategory[] = travelMocked
export const MOCKED_SUBCATEGORIES_GAMING: SubCategory[] = gamingMocked

console.log(sportsJson)

export const TrendingCategory: FC<TrendingCategoryProps> = (({ categoryName, subCategories, setSubcategory, setCategory }) => {
  return (
    <div style={{ textAlign: 'start', display: 'flex', flexDirection: 'column', gap: '8px' }}>
      <GravityHeading size={'x-large'} weight={'bold'} style={{ paddingBottom: '24px' }}>{categoryName}</GravityHeading>
      <div style={{ display: 'flex', gap: '8px', flexDirection: 'row' }}>
        {subCategories.map(({ heading, volume, growth }, index) => {
          return <TrendingCategoryCard heading={heading} volume={volume} growth={growth} setSubcategory={setSubcategory} setCategory={() => setCategory(categoryName)} src={index + 1} />
        })}
      </div>
      {categoryName !== 'Trending in Bike' &&
        <div style={{ marginTop: '8px', alignSelf: 'center' }}>
          <GravityButton type={'secondary'}>Load more</GravityButton>
        </div>
      }
    </div>
  )
})
