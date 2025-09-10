export interface ICollection {
  collection_id: string;
  name: string;
  description: string;
  image_url: string;
  created_at: string;
}

export interface IGetCollectionList {
  data: ICollection[];
}
