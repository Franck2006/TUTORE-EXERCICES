export declare namespace TypeModule {
    interface User {
        id: string;
        name: string;
        lastname: string;
        number: string;
        address: Address;
        friends: Friend[];
        articles: Articles[];
    }
    interface Address {
        country: string;
        province: string;
        town: string;
    }
    interface Friend {
        id: string;
        name: string;
        lastname: string;
        number: string;
    }
    interface Articles {
        id: string;
        productname: string;
        price: number;
        category: string;
    }
    interface Product {
        id: number;
        title: string;
        price: number;
        inStock: boolean;
    }
}
//# sourceMappingURL=types.interface.d.ts.map