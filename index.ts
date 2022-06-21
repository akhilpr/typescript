
interface Name {
    name:string
}
const fun1 = (name: Name) => {
    console.log(name.name);

}

fun1({ name: 'akhil' })