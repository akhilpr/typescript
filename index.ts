
// typings
let xy: string
let bo: boolean
let num: number
let anyType: any
xy = true
anyType = true
anyType = 5
console.log(xy);


// interface

interface First {
    name: string,
    adress: string,
    numbers: number
}

// example data
const data = {
    name: 'akhil',
    adress: 'aaaaaa',
    numbers: 5
}

const fun = (users: First) => {
    // users.adress = 5
    console.log(users.adress);
}
// const fun2 = (users:First) => {
//   //  users.adress = 5
//     console.log(users.adress);
// }

// Class 
export class NewClass {
    private vari = 'from class'
    vari3 = 'from class public'
    fun3 = () => console.log('lll', this.vari);

}

const classVar = new NewClass()
classVar.fun3()