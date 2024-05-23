export type TReview = {
    email: string;
    price: number;
    quantity: string;
  };
  
  export type TProduct = {
    name: string;
    description: string;
    price: number;
    category: string;
    tags: string[];
    variants: {
      type: string;
      value: string;
    }[];
    inventory: {
      quantity: number;
      inStock: boolean;
    };
    reviews: TReview[];
    slug: string;
    viewCount: number;
    isDeleted?: boolean;
  };
  