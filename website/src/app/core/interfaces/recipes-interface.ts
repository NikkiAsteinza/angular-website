export interface RecipeI{
    id: string;
    category: number;
    title: string;
    description: string;
    tags: string;
    image: string;
    prep_time: string;
    cook_time: string;
    num_of_ratings: string;
    rating: string;
    difficulty: string;
    ingred1: string;
    ingred2: string;
    ingred3: string;
    ingred4: string;
    ingred5: string;
    ingred6: string;
    ingred7: string;
    ingred8: string;
    ingred9: string;
    ingred10: string;
    ingred11: string;
    ingred12: string;
    instruct1: string;
    instruct2: string;
    instruct3: string;
    instruct4: string;
    instruct5: string;
    instruct6: string;
    instruct7: string | null;
    instruct8: string | null;
    instruct9: string | null;
    instruct10: string | null;
    instruct11: string | null;
    instruct12: string | null;
    tips: string;
}
// export enum ProductMaterial{
//     STEEL= 'Steel'
// }

// export type ProductMaterial = string| number;
// export type ProductMaterial = 'Steel'
// | "Metal"
// | "Cotton"
// | "Fresh"
// | "Concrete"
// | "Gratine"
// | "Frozen"
// | "Rubber"
// | "Wooden"
// | "Soft";