import { Product } from '.';

export type WishlistItem = Pick<Product, 'id' | 'thumbnail' | 'title'>;

export interface Wishlist {
    products: WishlistItem[];
}