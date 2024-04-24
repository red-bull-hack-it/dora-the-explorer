import {FC} from "react";
import {GravityButton, GravitySelect} from "@gravity/web-components-react";

interface SearchByCategoryProps {}

export const SearchByCategory: FC<SearchByCategoryProps> = (() => {

  const CATEGORY_OPTIONS = [{
    "id": "sports",
    "label": "Sports"
  }, {
    "id": "cycling",
    "label": "Culture"
  }, {
    "id": "fixed",
    "label": "Focus Trends 2024"
  }]

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'row',
      gap: '16px',
      height: '480px',
      alignItems: 'start',
    }}>
      <div style={{
        display: 'flex',
        flexDirection: 'row',
        gap: '24px',
      }}>
        <GravitySelect label="Category" placeholder="Select a category" options={CATEGORY_OPTIONS} style={{
          minWidth: '240px'
        }}/>
        <GravityButton onClick={() => console.log('TODO implement search!')} style={{
          justifySelf: 'end',
          alignSelf: 'end',
        }}>
          Search
        </GravityButton>
      </div>
    </div>
  )
})