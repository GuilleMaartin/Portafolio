
// // function saludar() {
// //     debugger
// //     let primerNro = prompt("Ingresa el primer número:")
// //     let segundoNro = prompt("Ingresa el segundo número:")
// //     let resultado = realizarCalculo(primerNro, segundoNro)
// //         console.log("Resultado:", resultado)
// //         saludar()
// //}


// function calculadora(parametro1, parametro2, operacion){
//     switch(operacion){
//         case "+":
//             return parametro1 + parametro2;
//             break;
//         case "-":
//             return parametro1 - parametro2;
//             break;
//         case "/":
//             return parametro1 / parametro2;
//             break;
//         case "*":
//             return parametro1 * parametro2;
//             break;
//         default:
//             return 0;
//             break;
//     }
// }
// calculadora()

function pedido(){
    switch (pedido){
        case "recibido":
            return prompt("its ok");
            break;
        case "entregado en el domicilio":
            return prompt("its ok");
            break;
        case "extraviado":
            return prompt ("notificado");
            break;
        default:
            return 0;
            break;
    }
}
