import {FC} from "react";
import {UserType} from "../../utils/types.ts";

interface AvatarContainerProps {
  userType: UserType;
}

export const AvatarContainer: FC<AvatarContainerProps> = (({userType}) => {
  const isUser = userType === 'user';

  return (
    <>
      {isUser ?
        <div style={{
          width: '24px',
          height: '24px',
          borderRadius: '99999px',
          backgroundColor: '#5844A7',
          color: 'white',
          fontSize: '10px',
          minWidth: '24px',
          display: 'grid',
          placeContent: 'center'
        }}>
          MP
        </div> :
        <div style={{
          width: '24px',
          height: '24px',
          borderRadius: '99999px',
          color: 'white',
          fontSize: '20px',
          minWidth: '24px',
          display: 'grid',
          placeContent: 'center'
        }}>
          🐟
        </div>
      }
    </>
  )
})