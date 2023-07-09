export interface ProductI{
    createdAt?: string; // Esto es opcional
    name:string;
    // color:string;
    price:number;
    description:string;
    image:string;
    id:string;
    stock:number;
    // materials: ProductMaterial;
}

// export enum ProductMaterial{
//     STEEL= 'Steel'
// }

// export type ProductMaterial = string| number;
export type ProductMaterial = 'Steel'
| "Metal"
| "Cotton"
| "Fresh"
| "Concrete"
| "Gratine"
| "Frozen"
| "Rubber"
| "Wooden"
| "Soft";