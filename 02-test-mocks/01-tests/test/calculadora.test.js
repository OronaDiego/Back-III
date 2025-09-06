import { calculadora } from "../calculadora.js";

describe ('Conjunto de pruebas Calculadoras',()=>{
    it('Deberia poder sumar dos numeros ',()=>{
        //3 etapas
        // preparacion -> seteamos los valores que vamos a utilizar 
        const n1=5;
        const n2=10;
        const resultadoEsperado = 15;

        //etapa ejecucion
        // llamamos a la funcoina testear con los valores que declaramos en la etapa 1
        const resultado = calculadora.suma(n1,n2);

        // Etapa Verificacion
        // es en donde hacemos las pruebas 
        // con la palabra expects podemos anidar, en este caso un toBe que compara un valor con otro
        expect(resultado).toBe(resultadoEsperado);
        expect(resultado).not.toBeNull();
        expect(resultado).not.toBeUndefined();
        expect(resultado).not.toBeNaN();
        expect(resultado).toBeGreaterThan(14);
        expect(resultado).toBeLessThan(16);
    })

    it('Deberia responder con error al sumar valores no numericos', ()=>{
        const arg1="Hola";
        const arg2= 2;

        const errorEsperado= "Los valores no son numeros";

        expect(()=>calculadora.suma(arg1,arg2)).toTrow();
        expect(()=>calculadora.suma(arg1,arg2)).toTrow(Error);
        expect(()=>calculadora.suma(arg1,arg2)).toTrow(errorEsperado);
    })

    it('Deberia retornar false al verificar valores no númericos', ()=>{
        const arg1 = "Hola";
        const arg2 = 2;
        const resultadoEsperado = true;
        const resultado = calculadora.chekearValores(arg1,arg2);
        expect(resultado).toBe(resultadoEsperado); 
    })
})