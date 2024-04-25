import {FC} from "react";
import {GravityHeading} from "@gravity/web-components-react";

export interface NavbarProps {}

export const Navbar: FC<NavbarProps> = (() => {
  return (
    <nav style={{
      position: 'fixed',
      height: '48px',
      left: '0',
      right: '0',
      top: '0',
      backgroundColor: 'white',
      paddingInline: '34px',
      zIndex: '1',
    }}>
      {/*<GravityIcon name={''} />*/}
      <div style={{display: 'flex', alignItems: 'center', justifyContent: 'start', height: '100%', gap: '14px'}}>
        <img src={'dora-icon.png'} style={{height: '20px'}}></img>
        <div>
          <GravityHeading weight={'medium'}>DORA </GravityHeading><GravityHeading color={'dark-subtle'}>the
          explorer</GravityHeading>
        </div>
      </div>
    </nav>
  )
})