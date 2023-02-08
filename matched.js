const products =[
    {id:1,name:"samsung phone",price:19000},
    {id:2,name:"samsung laptop",price:49000},
    {id:3,name:"iphone Phone",price:119000},
    {id:4,name:"mac laptop",price:19000},
    {id:5,name:"walton phone",price:19000},
    {id:6,name:"walton laptop",price:19000},
    {id:6,name:"dell phone",price:19000},
    {id:6,name:"Dell Laptop",price:19000}
]
function matched(products,search){
    const matched =[];
    for(const product of products){
        if(product.name.includes(search)){
          matched.push(product);
        }
    }
    return matched;
}
const result = matched(products,'phone');
console.log(result)