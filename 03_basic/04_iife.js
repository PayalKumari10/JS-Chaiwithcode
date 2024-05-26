// Immediately Invoked Function Expressions (IIFE)


(function chai(){
    //named IIFE
    console.log(`DB CONNECTED`);
})();     //here we can use semicolon (;)

(function aurcode(){
    
    console.log(    `DB CONNECTED TWO`);
} )();

((name) => {
    console.log(    `DB CONNECTED THREE ${name}`);
} )('payal')   

//iffe use for remove the pollutions in global scope.