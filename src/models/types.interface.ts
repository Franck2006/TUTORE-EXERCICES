export namespace AppTypes {
    export interface User {
        id: number;
        name: string;
        email: string;
        isActive: boolean;
    }

    export interface Product {
        id: number;
        title: string;
        price: number;
        inStock: boolean;
    }

}