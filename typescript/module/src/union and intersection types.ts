// union types
type types = {
    unionType: "option1" | "option2"
}

// intersection types
type firstHalf = {
    property1: string;
    property2: string;
}

type secondHalf = {
    property1: string;
}

type intersectionType = firstHalf & secondHalf