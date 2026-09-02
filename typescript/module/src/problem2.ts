interface Person {
  address: {
    street: string;
    city?: string;
  };
  phone: number;
}

const getAddressCity = (param: Person): string | undefined => {
  return param.address.city;
};

const person1: Person = {
    address : {
        street: "ggg"
    },
    phone: 54654
}
const variabler = getAddressCity(person1)
console.log(variabler)
console.log(3+4)