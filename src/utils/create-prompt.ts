import {MicroTrend} from "./types.ts";

interface PromptProps {
  microTrends: MicroTrend | null;
  topic: string;
}

function getTrendString(microTrends: MicroTrend | null): string {
  if (!microTrends) {
    return '';
  }

  return microTrends.related_trends.map((related) => related.keyword).join(', ')
}

export function createPrompt({ microTrends, topic }: PromptProps): string {
  const microTrendString = getTrendString(microTrends);

  return (`##CONTEXT: You are content editor for Redbull.com. You follow the brand values for Red Bull. You want to create content that people really care about in the niches that Red Bull targets. (e.g. How to prepare for a marathon for the focus group fitness) STORIES THAT COMSUMERS CARE ABOUT and at the same time perform good in SEO.  You connect a "demand" (people looking for something in the specific time of need")  with a story on red bull.com, but without directly mentioning red Bull.\n 

## TASK: You want to tap into ${topic} as a topic. During SEO Research, you found the following micro trends that people care about at the moment. Come up with 10 actionable ideas what to write about.\n\n 

##MICRO TRENDS: ${microTrendString} Example: Padel Bag, Padel rules for dummies, Padel serve, Padel costs, basic padel equipment, warm ups for padel`);
}