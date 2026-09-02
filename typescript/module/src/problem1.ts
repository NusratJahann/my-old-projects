type ParamType = string | number
const func = (param : ParamType) :number => {
    if(typeof param === "string"){
        return param.length
    } else {
        return param*param
    }
}
let a = func(3)
console.log(a)
