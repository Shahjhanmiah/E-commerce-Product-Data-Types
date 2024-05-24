export type TReview = {
  email: string;
  price: number;
  quantity: string;
};

export type TOrder = {
  email: string;
  price: number;
  quantity: string;
  reviews: TReview[];
  slug: string;
  viewCount: number;
  isDeleted?: boolean;
};
