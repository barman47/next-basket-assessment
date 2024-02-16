import { Product } from '.';

export type CartItem = Pick<Product, 'id' | 'thumbnail' | 'title' | 'price'> & { quantity: number, total: number; };

export interface Cart {
    products: CartItem[];
    total: number;
}