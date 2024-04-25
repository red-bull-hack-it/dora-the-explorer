import { FC } from "react";
import { AvatarContainer } from "./AvatarContainer.tsx";
import { GravityText } from "@gravity/web-components-react";
import { UserType } from "../../utils/types.ts";

export interface MessageContainerProps {
  message: string;
  userType: UserType;
}

export const MessageContainer: FC<MessageContainerProps> = (({ message, userType }) => {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'row',
      gap: '6px',
      backgroundColor: userType === 'user' ? 'rgb(255,255,255)' : 'rgb(255,255,255)',
      padding: '24px',
      borderRadius: '24px',
      overflow: 'hidden,'
    }}>
      <AvatarContainer userType={userType} />
      <div style={{ display: 'flex', flexDirection: 'column', gap: '4px', alignItems: 'start', textAlign: 'start' }}>
        <GravityText size={'small'} weight={'bold'}>
          {userType === 'user' ? 'You' : 'Dora'}
        </GravityText>

        <ul>
          {processText(message)}
        </ul>

      </div>
    </div>
  )
})

const processText = (text: string) => {
  const items = text.split(/\d+\./).filter(item => item.trim() !== '');
  const message = (x: string) => x.trim().replace('*', '').replace('$', '').replace('"', '').replace('*', '')

  const unorderedList = items.map((item, index) => <li key={index}>
    <GravityText color="dark-subtle" size={'small'}>
      {message(item)}
    </GravityText>

  </li>);

  return unorderedList
}
