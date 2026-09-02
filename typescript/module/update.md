# l2b2a1-explore-basic-typescript-simple-assignment-SadikHasanRafi
l2b2a1-explore-basic-typescript-simple-assignment-SadikHasanRafi created by GitHub Classroom

**1. What are some benefits of using TypeScript over JavaScript in a project?**

--> Type scripts have some extra features and it also provide type safety so that the errors occus before the deployment. It also helps editor for inteligence about any object or class property and this reduce the hassel of watching the documentation over and over again.


**2. What is the purpose of the optional chaining (?.) and nullish coalescing (??) operators in TypeScript, and how do they work? Provide an example for each?**

--> Optional chaining is used to check if the property exist or not in any object. If it founds that the property does not exist then it will return undifined. Here due to this optional chaining it will not occur any error. Example,

```
interface Person {
  address: {
    street: string;
    city?: string;
  };
  phone: number;
}

const person1: Person = {
    address : {
        street: "Dhaka"
    },
    phone: 01555555555
}
```

Here according to typescript type safety it will occur an error in the person1 instance but here it will not cause any error hence in the interface we make the city property optional by using sign '?'.
Now the nullish coalescing operator is used to manage default value when the value become null or undefined. Example, 

```
const balance:number | undefined
const defaultBalance:number = 20
const finalBalance:number = balance ?? defaultBalance
```

Here if for some modification or due to production error the balance variable's value become zero then when we asign the value of balance into finalBalance variable without nullish coalescing operator it will cause error but here in typescript instead of become error it will assign the defaultBalance variable's value into finalBalance.


**3. How do you handle asynchronous operations in TypeScript, and what are the advantages of using async/await over callbacks or Promises?**

-->In typescript asynchronous operations are handled by either promise constructor or by async/await operator. Promise constructor and async/await gives similar feature and outcome but in by using promise it become complicated to manage if there are multiple nested promise inside it become difficult to develop. On the other hand await/async is used to same perpouse as promise contructor but here async/await makes code more easier and more developer friendly and this helps developer to do complicated staffs.


**4. How can you use TypeScript's enums, and what are their advantages?.**

--> Enums allows to set some constant value thus it increase the type safety and also makes code more readable. To use enum in typescript there is a keyword enum that helps to make enum in typescript. Example,
```
enum Sign {
    warning = "orange",
    error = "red",
    success = "green"
    }
```

**5. Explain the role of type guards in TypeScript and provide an example of a custom type guard.**

--> Type guard helps narrowing down the data type of a specific code block. It is helpful to work with union type data. It also helps to check if a specific property are there in the object or instance or not.

```
const price = number | string
const quantity = number | string

const totalPrice = (price: number | string, quantity: number | string): number => {
  if (typeof price === "number" && typeof quantity === "number") {
    return price * quantity;
  } else {
    return (price as number) * (quantity as number);
  }
};

const total = totalPrice( "5", "10")
```


**6. Can you give an example of how to use "readonly" properties in TypeScript?**

--> Here is the way to use readonly properties in typeScript.

```
class Mobile {
  readonly brand: string;
  readonly model: string;
  readonly price: number;

  constructor(brand: string, model: string, price: number) {
    this.brand = brand;
    this.model = model;
    this.price = price;
  }

  getMobileInfo(): string {
    return `${this.brand} ${this.model} ${this.price}`;
  }
}
const myMobile = new Mobile("Samsung", "Galaxy S26", 210000);
```

Here we cannot change the property value of myMobile. It will casue an error as the properties are read only moode.



**7. Explain what a union type is in TypeScript and provide an example of its usage.**

--> Union type allows a variable to store two different type of data type. Thus a variable can store multiple type of dataset although not in the same time. Example,

  ` const anyTypeOfData : number | string | number[]`

Now in anyTypeOfData variable can store number or string or array of number.
