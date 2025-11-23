// Uppgift 2 - Variabler och scope //

//Före blocket//

console.log("U2 - FÖre blocket: Koden har startat.");
{
var varTal = 1;
let letTal = 2;
const constTal = 3;

console.log("U2 - Inuti blocket", varTal, letTal, constTal);   

}
// Efter blocket
console.log("U2 - Efter blocket, varTal:", varTal);
// LetTal och constTal kan inte loggas här - de finns bara i blocket

/*Reflektion uppgift 2
1. var ignorera block och kan nås både i och utanför blocket. let och const är blockscope och kan bara användas inne i blocket där de skapats.
2. console.log före blocket kan inte nå några variabler från blocket. Inuti blocket fungerar alla tre variabler. Efter blocket fungerar bara var, eftersom let och const "försvinner" efter blocket. */


// Uppgift 3 - Jämförelser, NaN, null, undefined
console.log("U3 - '3' == 3:", '3' == 3);
console.log("U3 - '3' === 3:", '3' === 3);

console.log("U3 - NaN === NaN", NaN === NaN);
console.log("U3 - null == undefined:", null == undefined);
console.log("U3 - null === undefined:", null === undefined);

let resultUndefined = undefined ? "truthy" : "falsy";
console.log("U3- undefined är:", resultUndefined);
/*
Reflektion uppgift 3
1. == gör typkonvertering och därför är '3' == 3 true. Men === jämför både typ och värde,
   därför är '3' === 3 false. NaN är aldrig lika med något, inte ens sig självt. 
   null == undefined är true eftersom de är "lösa" lika, men === är false då typerna skiljer sig.

2. I en ternary operator eller if-sats testas uttrycket om det är truthy eller falsy.
   undefined är falsy, därför väljs falsy-grenen i ternary-exemplet.

3. NaN betyder "Not a Number" och används när en beräkning inte ger ett giltigt tal.
   undefined betyder att ett värde saknas.
   null är ett medvetet tomt värde som man själv kan tilldela.
*/
///////////////////////////
// Uppgift 4 - Funktioner
//////////////////////////
let name = "Charlie";
console.log("U4 - Globalt name i början:", name);

function greet(name) {
return "Hej " + name;

}

console.log("U4 - greet('Mikaela'):", greet("Mikaela"));

function showLocalName() {
    let name = "Abu";  // lokal variabel som har samma namn
    console.log("U4 – Inuti showLocalName, name:", name);
}

showLocalName();

function updateGlobalName(newName) {
    // ingen let här – vi använder den globala variabeln
    name = newName;
    console.log("U4 – Inuti updateGlobalName, name:", name);
}

updateGlobalName("Kaka");

console.log("U4 – Globalt name efter updateGlobalName:", name);

/* Reflektion uppgift 4
1. Funktionsdeklarationer kan anropas både före och efter de är definierade. Funktionsuttryck och arrowfunktioner fungerar bara efter att de skapats.
   Jag valde funktionsdeklaration eftersom den är tydlig och kan anropas fritt.

2. En funktionsdeklaration kan anropas innan den står i koden, men en arrowfunktion
   måste ligga före anropet för att fungera.

3. Parametern name i greet påverkar inte den globala variabeln name. Den Lokala name i showLocalName skuggar den globala, men bara inuti funktionen. updateGlobalName ändrar däremot den globala variabeln.

4. Parameter = namnet i funktionens parentes.
   Argument= värdet man skickar in när funktionen anropas.
   Variabel = ett namn som lagrar ett värde. */
