// Generic Types
type genericTypes<param> = Array<param> // it is good to use "T" instead of "param"

const arrayOfNumbers: genericTypes<number> = [9, 11, 51, 420]
const arrayOfStrings: genericTypes<string> = ['crow', 'duck', 'dove', 'pigeons']
const arrayOfBooleans: genericTypes<boolean> = [true, true, false]
const arrayOfObject: genericTypes<{property1: string, property2: number}> = [
    {
        property1: "string",
        property2: 452
    }
]
