import './App.css'
import {SearchByTrending} from "./components/searchByTrendingOverview/SearchByTrending.tsx";
import {GravityIcon} from "@gravity/web-components-react";
import {useState} from "react";
import {SubCategory} from "./components/searchByTrendingOverview/TrendingCategory.tsx";
import {ChatContainer} from "./components/chatContainer/ChatContainer.tsx";
import {MICRO_TREND_EXAMPLE} from "./factories/micro-trends.ts";
import {Navbar} from "./components/navbarContainer/Navbar.tsx";

function App() {
  const [subCategory, setSubCategory] = useState<SubCategory | null>(null)

  return (
    <>
      <Navbar />
      {/*<GravityHeading size={'xx-large'} weight={'bold'}>Dora the Explorer</GravityHeading>*/}
      <div style={{ paddingTop: '36px' }}>
        <div className="wrapper" style={{
          display: 'flex',
          flexDirection: 'row',
          gap: '64px',
          paddingBlock: '32px',
          maxWidth: '900px',
        }}>
          {subCategory ?
            <ChatContainer subcategory={subCategory} microTrend={MICRO_TREND_EXAMPLE[0]}/>
            :
            <SearchByTrending setSubcategory={setSubCategory} />
          }
        </div>
        <p className="read-the-docs" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '4px' }}>
          <GravityIcon name={'warning-outline'} size={'medium'} color={'dark-muted'} /> With generative AI everything is 100% true and you can trust it every time
        </p>
      </div>
    </>
  )
}

export default App
