import { ProductI } from "./product-interface";

export interface CartProductI{
    product: ProductI;
    ammount: number;
    price:number;
}