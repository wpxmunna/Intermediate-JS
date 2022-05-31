// FALSY VALUE--
//  0, undefined, null, NaN, false;

// TRUTHY VALUE --
//  ANY VALUE, " {WHITE-SPACE} ", [ EMPTY-ARRAY ], { EMPTY-OBJECT };

const name = "";
if (name) {
    console.log("Condition is true");
}
else {
    console.log("Condition is false");
}