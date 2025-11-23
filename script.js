{
var varTal = 1;
let letTal = 2;
const constTal = 3;

console.log("U2 - Inuti blocket", varTal, letTal, ConstTal);   

}

console.log("U2 - FÖre blocket: Koden har startat.");

console.log("U2 - Efter blocket, varTal:", varTal);


console.log("U3 - '3' == 3:", '3' == 3);
console.log("U3 - '3' == 3:", '3' == 3);

console.log("U3 - NaN === NaN", NaN === NaN);
console.log("U3 - null == undefined:", null == undefined);
console.log("U3 - null == undefined:", null == undefined);

let resultUndefined = undefined ? "truthy" : "falsy";
console.log("U3- Är undefined truthy eller falsy?:", resultUndefined);



let name = "Ali";
console.log("U4 - Globalt name i början:", name);

function greet(name) {
return "Hej " + name;

}

console.log("U4 - greet('Mikaela'):", greet("Mikaela"));

function showLocalName() {
    let name = "Sara";  // lokal variabel som har samma namn
    console.log("U4 – Inuti showLocalName, name:", name);
}

showLocalName();

function updateGlobalName(newName) {
    // ingen let här – vi använder den globala variabeln
    name = newName;
    console.log("U4 – Inuti updateGlobalName, name:", name);
}

updateGlobalName("Omar");

console.log("U4 – Globalt name efter updateGlobalName:", name);