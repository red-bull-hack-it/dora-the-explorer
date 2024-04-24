export type UserType = 'user' | 'assistant';

type Keyword = {
  keyword: string;
  volume: number;
  growth: number;
}
export type Topic = {
  categories: string[];
  absolute_volume: number;
  related_trends: Keyword[]
}
export type ChannelBreakdown = {
  linkedin: number;
  tiktok: number,
  youtube: number,
  instagram: number,
  twitter: number,
  facebook: number,
  reddit: number,
  pinterest: number
}
export type MicroTrend = {
  keyword: string;
  channelBreakdown: ChannelBreakdown;
  related_trends: Keyword[];
}