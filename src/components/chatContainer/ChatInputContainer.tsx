import {FC, SetStateAction} from "react";
import {GravityButton, GravityTextarea} from "@gravity/web-components-react";

interface ChatInputContainerProps {
  prompt: string;
  setPrompt: React.Dispatch<SetStateAction<string>>;
  sendPrompt: () => void;
}

export const ChatInputContainer: FC<ChatInputContainerProps> = (({prompt, setPrompt, sendPrompt}) => {
  return (
    <div style={{ display: "flex", gap: '8px', flexDirection: 'column' }}>
      <GravityTextarea value={prompt} onInputChanged={(changeEvent) => setPrompt(changeEvent.target.value)} style={{ width: '100%', height: '100%', boxSizing: 'border-box' }}/>
      <GravityButton type="primary" size="small" onClick={() => sendPrompt()}>Send</GravityButton>
      <div style={{ width: '2000px' }} />
    </div>
  )
})