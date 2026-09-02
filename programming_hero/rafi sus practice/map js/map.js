/*
1.use of obj property
2.use aerrow function
3.multiple parameter aerrow function
4.multiline arrrow function
5.funcion declaration vs aerrow function google it
6.spread operator 
7.array of number and then map all the element and do some operation
8.array of number filter odd number
9.array of object and find product price value of 5000
10. use destracturing to create a simple variable of any property of an object
11. use destractuing to create a simple or more variable to get the third element of the array is a variable called three
*/




//Destructuring
/*
const product = {
    id : 101,
    name : 'brain station',
    type : 'IT farm',
    owner : 'Hafiz vai',
    tech : {
        fontEnd : 'tail-wind css',
        backEnd : 'redux',
        fullStack : 'JS',
        platFrom : 'web',
        employee1: {
            name: 'Maruful Tomal',
            age: 23
        },
        employee2: {
            name: 'Zayed',
            age: 24
        },
        employee3: {
            name: 'Arnob',
            age: 42
        },
        os : ['MAC','Windows','Linux'],
        device : {
            laptop : [{
                brand : 'Lenovo',
                price : 40000
            },{
                brand : 'Asus',
                price : 43000
            },{
                brand : 'Dell',
                price : 65000
            },{
                brand : 'HP',
                price : 50000
            },{
                brand : 'Walton',
                price : 30000
            }]

        }
    }
}
// console.log(product.tech.device.laptop[3].brand);
// const [brand] = {product{tech{device[laptop[]]}}};
const {brand,price}=product.tech.device.laptop[3];
console.log(brand,price);
// const {os} = product.tech;
// console.log(os[1]);
*/