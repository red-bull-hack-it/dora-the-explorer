import './App.css'
import {SearchByTrending} from "./components/searchByTrendingOverview/SearchByTrending.tsx";
import {GravityIcon, GravityText} from "@gravity/web-components-react";
import {useState} from "react";
import {SubCategory} from "./components/searchByTrendingOverview/TrendingCategory.tsx";
import {ChatContainer} from "./components/chatContainer/ChatContainer.tsx";
import {MICRO_TREND_EXAMPLE} from "./factories/micro-trends.ts";
import {Navbar} from "./components/navbarContainer/Navbar.tsx";

function App() {
  const [subCategory, setSubCategory] = useState<SubCategory | null>(null)
  const [category, setCategory] = useState<string | null>(null)

  return (
    <>
      <Navbar />
      <div style={{ paddingLeft: '289px', height: '100%' }}>
        <aside style={{ position: 'fixed', width: '289px', height: '100%', left: '0', top: '48px', paddingBlock: '24px', paddingInline: '12px' }} className="gradient-background">
          <div style={{display: 'flex', flexDirection: 'column', alignItems: 'start'}}>
            <div style={{paddingInline: '16px', paddingBlock: '16px'}}>
              <GravityText color={'light-subtle'} weight={'regular'} size="x-small">
                {'Explore'}
              </GravityText>
            </div>
            <div style={{paddingInline: '16px', paddingBlock: '16px', backgroundColor: 'rgb(1,25,50)', width: '241px', textAlign: 'start', borderRadius: '12px'}}>
              <GravityText color={'light'} weight={'bold'} size="medium">
                {'Overview'}
              </GravityText>
            </div>
            <div style={{paddingInline: '16px', paddingBlock: '16px', backgroundColor: ''}}>
              <GravityText color={'light'} weight={'medium'} size="medium">
                {'Explore'}
              </GravityText>
            </div>
            <div style={{paddingInline: '16px', paddingBlock: '16px'}}>
              <GravityText color={'light'} weight={'medium'} size="medium">
                {'Trend Analysis'}
              </GravityText>
            </div>
          </div>
        </aside>
        {/*<GravityHeading size={'xx-large'} weight={'bold'}>Dora the Explorer</GravityHeading>*/}
        <div style={{paddingTop: '36px'}}>
          <div className="wrapper" style={{
            display: 'flex',
            flexDirection: 'row',
            gap: '64px',
            paddingBlock: '32px',
            maxWidth: '900px',
          }}>
            {subCategory ?
              <ChatContainer subcategory={subCategory} category={category} microTrend={MICRO_TREND_EXAMPLE[0]}/>
              :
              <SearchByTrending setSubcategory={setSubCategory} setCategory={setCategory} />
            }
          </div>
          <p className="read-the-docs" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '4px', paddingBottom: '42px' }}>
            <GravityIcon name={'warning-outline'} size={'medium'} color={'dark-muted'} /> With generative AI everything is 100% true and you can trust it every time
          </p>
        </div>
      </div>
    </>
  )
}

export default App
