import { IPagination } from "./pagination.type";

export interface IReviewUser {
  name: string;
  user_id: string;
  avatar_url: string | null;
}
export interface IReviewItem {
  rating: number;
  content: string | null;
  created_at: string;
  user: IReviewUser;
}
export interface IRatingOverview {
  counts: { count: number; rating: number }[];
  rating: number;
  total: number;
}

export interface IGetReviewListData {
  aggregate: IRatingOverview;
  data: IReviewItem[];
  pagination: IPagination;
}
