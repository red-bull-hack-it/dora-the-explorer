import {FC} from "react";
import {AvatarContainer} from "./AvatarContainer.tsx";
import {GravityText} from "@gravity/web-components-react";
import {UserType} from "../../utils/types.ts";

export interface MessageContainerProps {
  message: string;
  userType: UserType;
}

export const MessageContainer: FC<MessageContainerProps> = (({ message, userType}) => {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'row',
      gap: '6px',
      backgroundColor: userType === 'user' ? 'rgb(255,255,255)' : 'rgba(255,255,255,0.7)',
      padding: '24px',
      borderRadius: '24px'
    }}>
      <AvatarContainer userType={userType}/>
      <div style={{display: 'flex', flexDirection: 'column', gap: '4px', alignItems: 'start', textAlign: 'start'}}>
        <GravityText size={'small'} weight={'bold'}>
          {userType === 'user' ? 'You' : 'Dora'}
        </GravityText>
        <GravityText color="dark-subtle" size={'small'}>
          {message}
        </GravityText>
      </div>
    </div>
  )
})