// reference type
const object: {
    basic: string;
    optionalType?: string; //optional type
    literalType: "This is a string" // literal type
} = {
    basic: 'string',
    literalType: "This is not a string" // this text has to be same as "literalType". The "not" is not allowed as it is not in literal type.
}