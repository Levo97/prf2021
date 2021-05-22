export interface Product {
  // Springes backendhez hogy legyen közös id mongoval
  itemid: number;

  name: string;
  description: string;
  price: number;
  quantity: number;
  img_name: string;
}
