import './App.css'
import {SearchByTrending} from "./components/searchByTrendingOverview/SearchByTrending.tsx";
import {GravityHeading} from "@gravity/web-components-react";

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
      </div>
      <p className="read-the-docs">
        With generative AI everything is 100% true and you can trust it every time
      </p>
    </>
  )
}

export default App
