import type { TypeModule } from "./models/types.interface";

// this is the place of the creating the objects
const product1: TypeModule.Product = {
    id: 101,
    title: "Laptop",
    price: 999.99,
    inStock: true,
};

const products: TypeModule.Product[] = [
    { id: 102, title: "Smartphone", price: 499.99, inStock: true },
    { id: 103, title: "Tablet", price: 299.99, inStock: false },
];

// ici j'affiche les variables dans la console
console.log("Product1:", product1);
console.log("Products List:", products);


//  this is the the other part of coding 
const users: TypeModule.User[] = [
    {
        id:"2b273508-6945-5292-997e-f5e4a09c43a2",
        name:"Jimmy",
        lastname:"Sean",
        number:"61b3:94c1:0cdf:64da:9613:0328:fe0d:8fcb",
        address:{
            country:"North Korea",
            province:"hM65R",
            town:"",
        },
        friends: [
            {  id:"b9ea357e-b096-50fe-9108-66930cadc504",name:"Chester",lastname:"Caroline",number:"5fde:d841:0fff:45e3:5206:ffb8:9ab9:9c89" },
            {  id:"1923c803-ae98-5642-868c-5a4576ddef3f",name:"Gary",lastname:"Nell",number:"fd39:797c:227d:f589:535c:9777:63f8:21e8" },
            {  id:"b710a42b-a036-5f5a-bf78-7d21fc51e96e",name:"Mitchell",lastname:"Maggie",number:"b756:bea9:4699:5bb4:fb9b:c82f:7f06:baf2" },
            {  id:"752dd2f0-fb13-5e7f-bc25-1a9a5ad67279",name:"Jerry",lastname:"Bertie",number:"03cd:d5f2:a0e6:7bde:2935:848b:7a64:def2" }
        ],
        articles : [
            { id:"e7cdaecb-eeb9-5084-9cf5-f739cee68392", productname:"baby", price:1, category: ""},
            { id:"4bd64183-0388-5ed6-8ac6-c32606038250", productname:"rod", price:2, category: ""},
            { id:"fa56ea81-31d9-5f6b-b3a1-7ae24c7d1a7c", productname:"drive", price:3, category: ""},
        ]
    },
    {
        id:"81e95d94-6d75-5cd4-b806-daf6c53bec9f",
        name:"Eula",
        lastname:"Ina",
        number:"e10f:0fec:3f9c:a3f7:5546:320c:d2e3:b582",
        address:{
            country:"Diego Garcia",
            province:"T5OasEs6uKt",
            town:"",
        },
        friends: [
            {  id:"4b2d0d6e-df3e-55d6-8ab2-ce7ab36af670",name:"Cole",lastname:"Fanny",number:"1cb5:5751:74d8:3b19:6d13:3bd3:e4a6:5428" },
            {  id:"10fa1b12-1e19-50a2-b748-c09401616b61",name:"Cornelia",lastname:"Olive",number:"635e:19c0:bef7:c08f:8008:01d8:2181:89f0" },
            {  id:"20837030-92ae-523e-acee-cdcd6f672c62",name:"Chester",lastname:"Corey",number:"6ae5:6f63:c958:f402:b354:e906:0029:2920" },
            {  id:"cc52a27b-a70a-50d7-9287-e037d2362328",name:"Nora",lastname:"Elmer",number:"59ee:bb16:8088:21f0:16e6:b576:0950:1ba9" }
        ],
        articles : [
            { id:"abbc3bfe-a8ba-55e7-a1f7-d1f72cb373d5", productname:"elephant", price:78.0795, category: ""},
            { id:"ad256389-ff72-50a0-9cf6-d60119848154", productname:"track", price:3.2056, category: ""},
            { id:"0dd0a27c-5491-5f69-930d-64286d128f5b", productname:"plane", price:1.9543, category: ""},
        ]
    },
    {
        id:"99cad7dd-8a84-5b22-a84e-daf649b202b7",
        name:"Ruth",
        lastname:"Phoebe",
        number:"671a:37b1:f70f:4331:df5d:04c9:25fe:6b7f",
        address:{
            country:"Qatar",
            province:"pQeILQuGs5joczW",
            town:"",
        },
        friends: [
            {  id:"60c943c4-01db-5c3d-b60a-53b9bb8691ca",name:"Winifred",lastname:"Harry",number:"47d1:aeb2:483e:cea1:6e94:a3e5:6448:17c6" },
            {  id:"45ce1002-8bda-585b-a957-dbf197fad75a",name:"Jimmy",lastname:"Lina",number:"8fab:1a5e:ed78:512c:7afa:eb50:75d8:7f21" },
            {  id:"54f1e165-acf5-5220-bb54-ac2da4a24de5",name:"Seth",lastname:"Isabelle",number:"8709:a448:0470:cefb:99a6:4804:c080:900a" },
            {  id:"e16c5cc5-7c30-587c-9fb6-35ca810a26f2",name:"Bernard",lastname:"Landon",number:"942c:1fac:4a14:fcf4:d160:55ae:5764:0187" }
        ],
        articles : [
            { id:"da5c06b6-e1b8-5e2b-8233-56324a61ed4d", productname:"feel", price:71.8885, category: ""},
            { id:"fc3c3402-bba2-58a2-a9f7-e8169dd18ccb", productname:"spin", price:70.3425, category: ""},
            { id:"abeb2fea-abb5-5736-8e22-21d20850d481", productname:"teeth", price:29.3113, category: ""},
        ]
    }
]


// this is the place of working with the array methods
const userFriends = users.find( user => user.id === "99cad7dd-8a84-5b22-a84e-daf649b202b7")?.friends

console.log(
    userFriends?.map( friend => {
        return friend.name
    }).join(", ")
)

const addeduser = users.map(({articles}) =>{
    const total = articles.reduce((acc, item)=> acc + item.price  ,0)

    return { ...articles, total_price : total.toFixed(2) }
})

console.log("added users ",addeduser)