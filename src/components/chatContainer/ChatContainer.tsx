import {SubCategory} from "../searchByTrendingOverview/TrendingCategory.tsx";
import {FC} from "react";
import {MicroTrend} from "../../utils/types.ts";
import {createPrompt} from "../../utils/create-prompt.ts";
import {MessageContainer} from "./MessageContainer.tsx";

interface ChatContainerProps {
  subcategory: SubCategory | null;
  microTrend: MicroTrend | null;
}

export const ChatContainer: FC<ChatContainerProps> = (({ subcategory, microTrend }) => {
  const promptString = createPrompt({ topic: subcategory?.heading ?? '', microTrends: microTrend });

  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <div style={{ maxWidth: '60%', display: 'flex', gap: '8px', flexDirection: 'column' }}>
        <MessageContainer message={promptString} userType={'user'} />
        <MessageContainer message={'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.'} userType={'assistant'} />
      </div>
    </div>
  )
})