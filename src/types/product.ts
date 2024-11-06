export type Product = {
  id: number;
  image: string;
  name: string;
  category: string;
  amount: number;
  sold: number;
  weight: number;
  component: Component;
  supplier: string;
  supplyStatus: boolean;
};

export type Component = {
  plastic: number;
  paper: number;
  glass: number;
  metal: number;
};
