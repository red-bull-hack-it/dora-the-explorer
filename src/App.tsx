import './App.css'
import {SearchByCategory} from "./components/searchByCategoryOverview/SearchByCategory.tsx";
import {SearchByTrending} from "./components/searchByTrendingOverview/SearchByTrending.tsx";
import {GravityHeading, GravityText} from "@gravity/web-components-react";

function App() {

  return (
    <>
      <GravityHeading size={'xx-large'} weight={'bold'}>Dora the Explorer</GravityHeading>
      <div className="wrapper" style={{
        display: 'flex',
        flexDirection: 'row',
        gap: '64px',
        paddingBlock: '32px',
      }}>
        <SearchByTrending />
        <SearchByCategory />
      </div>
      <p className="read-the-docs">
        With generative AI everything is 100% true and you can trust it every time
      </p>
    </>
  )
}

export default App
