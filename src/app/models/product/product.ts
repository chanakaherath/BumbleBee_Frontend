import { Brand } from "../brand/brand";
import { Category } from "../category/category";

export class Product {

    id: string = "";
    name: string = "";
    code: string = "";
    description: string = "";
    price: string = "";
    status: string = "";
    isDeleted: string = "";
    brandId: string = "c0a83801-8754-14f7-8187-54e9af530001";
    brand: Brand = new Brand();
    categoryId: string = "c0a83801-8755-1f0c-8187-5574dc720002";
    category: Category = new Category();

}
