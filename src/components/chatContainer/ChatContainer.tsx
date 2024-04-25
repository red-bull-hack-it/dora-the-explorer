import { SubCategory } from "../searchByTrendingOverview/TrendingCategory.tsx";
import {FC, useCallback, useState} from "react";
import { MicroTrend } from "../../utils/types.ts";
import { createPrompt } from "../../utils/create-prompt.ts";
import { MessageContainer } from "./MessageContainer.tsx";
import OpenAI from "openai";
import {
  GravityHeading,
  GravityIcon,
  GravityLoading,
  GravityTab,
  GravityTabSet,
  GravityText
} from "@gravity/web-components-react";
import {ChatInputContainer} from "./ChatInputContainer.tsx";

interface ChatContainerProps {
  category: string | null;
  subcategory: SubCategory | null;
  microTrend: MicroTrend | null;
}

const makeRequest = async (promptString: string) => {
  const apiKey = 'TEST';
  const openai = new OpenAI({ apiKey: apiKey, dangerouslyAllowBrowser: true });
  console.log(promptString);
  const completion = await openai.chat.completions.create({
    messages: [
      { "role": "system", "content": promptString }
    ],
    model: "gpt-3.5-turbo",
  });

  console.log(completion.choices[0]);

  return completion.choices
}

export const ChatContainer: FC<ChatContainerProps> = ({ subcategory, microTrend, category }) => {
  const [response, setResponse] = useState<OpenAI.Chat.Completions.ChatCompletion.Choice[]>([]);
  const [promptString, setPromptString] = useState(createPrompt({ topic: subcategory?.heading || '', microTrends: microTrend}));

  const [renderInput, setRenderInput] = useState<boolean>(true)

  const fetchOpenAiChat = useCallback(() => {
    setRenderInput(false);
    const fetchData = async () => {
      const prompt = createPrompt({ topic: subcategory?.heading ?? '', microTrends: microTrend });
      setPromptString(prompt);
      const res = await makeRequest(prompt);
      setResponse(res);
    };

    fetchData();
  }, [subcategory, microTrend]);

  return (
    <div style={{ display: 'flex', justifyContent: 'center', overflow: 'hidden' }}>
      <div style={{ maxWidth: '100%', display: 'flex', flexDirection: 'column', textAlign: 'start', overflow: 'hidden' }}>
        <div className={'header'} style={{ backgroundColor: 'white', paddingInline: '40px', paddingBlock: '24px 20px', borderRadius: '24px 24px 0 0', borderBottom: 'solid 1px rgb(236,236,237)'}}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '4px', backgroundColor: 'white' }}>
            <GravityText color={'dark-subtle'}>Overview</GravityText>
            <GravityIcon name={'arrow-right-outline'} color={'dark-subtle'} />
            <GravityText color={'dark-subtle'}>{category}</GravityText>
          </div>
          <GravityHeading size={'x-large'} weight={'bold'}
                          style={{paddingBottom: '24px'}}>{subcategory?.heading}</GravityHeading>
        </div>


        <GravityTabSet selected="suggestions" indent={false}>
          <GravityTab heading="Details" tab-id="id2">
            <GravityText>Details TODO</GravityText>
          </GravityTab>
          <GravityTab heading="Content Suggestions" tab-id="suggestions">
            <div style={{ marginTop: '20px' }}>
              {renderInput ?
                <div style={{ paddingInline: '8px', paddingTop: '4px', backgroundColor: 'white', borderRadius: '12px' }}>
                  <ChatInputContainer prompt={promptString} setPrompt={setPromptString} sendPrompt={() => fetchOpenAiChat()}/>
                </div>
                :
                <MessageContainer message={promptString} userType={'user'} />
              }

              {response.length === 0 && !renderInput ?
                <div style={{ overflow: 'hidden' }}>
                  <GravityLoading size={'large'} />
                </div>
                :
                response.map((message) => (
                  <MessageContainer message={message.message.content ?? 'DEFAULT'} userType={'assistant'} />
                ))
              }
            </div>
          </GravityTab>
        </GravityTabSet>
      </div>
    </div>
  )
}
