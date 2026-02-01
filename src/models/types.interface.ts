export namespace TypeModule {
    // this is the User interface
    export interface User {
        id: string,
        name: string,
        lastname: string ,
        number: string,
        address: Address,
        friends: Friend[],
        articles: Articles[]
    }

    export interface Address {
        country: string ,
        province: string ,
        town: string ,
    }

    export interface Friend {  
        id: string ,
        name: string ,
        lastname: string ,
        number: string 
    }

    export interface Articles { 
        id: string,
        productname: string,
        price:  number,
        category: string
    }

    // this is the Product interface
    export interface Product {
        id: number;
        title: string;
        price: number;
        inStock: boolean;
    }

    // this is for the lo

}