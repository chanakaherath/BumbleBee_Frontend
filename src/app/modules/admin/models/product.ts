import { Brand } from "./brand";
import { Category } from "./category";

export class Product {

    id: string = "";
    name: string = "";
    code: string = "";
    description: string = "";
    price: string = "";
    status: string = "";
    isDeleted: string = "";
    brandId: string = "c0a80105-875d-1b34-8187-5d6d0f740001";
    brand: Brand = new Brand();
    categoryId: string = "c0a80105-875d-1b34-8187-5d6fcaf50004";
    category: Category = new Category();

}
