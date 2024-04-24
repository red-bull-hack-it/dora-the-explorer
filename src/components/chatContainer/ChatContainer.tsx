import { SubCategory } from "../searchByTrendingOverview/TrendingCategory.tsx";
import { FC, useEffect, useState } from "react";
import { MicroTrend } from "../../utils/types.ts";
import { createPrompt } from "../../utils/create-prompt.ts";
import { MessageContainer } from "./MessageContainer.tsx";
import OpenAI from "openai";

interface ChatContainerProps {
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

export const ChatContainer: FC<ChatContainerProps> = ({ subcategory, microTrend }) => {
  const [response, setResponse] = useState<OpenAI.Chat.Completions.ChatCompletion.Choice[]>([]);
  const [promptString, setPromptString] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      const prompt = createPrompt({ topic: subcategory?.heading ?? '', microTrends: microTrend });
      setPromptString(prompt);
      const res = await makeRequest(prompt);
      setResponse(res);
    };

    fetchData();
  }, [subcategory, microTrend]);

  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <div style={{ maxWidth: '60%', display: 'flex', gap: '8px', flexDirection: 'column' }}>
        <MessageContainer message={promptString} userType={'user'} />
        {response.map((message) => (
          <MessageContainer message={message.message.content ?? 'DEFAULT'} userType={'assistant'} />
        ))}
      </div>
    </div>
  )
}
