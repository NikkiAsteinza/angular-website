export interface ProductI{
    createdAt?: string; // Esto es opcional
    name:string;
    // color:string;
    price:string;
    description:string;
    // image:string;
    id:string;
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