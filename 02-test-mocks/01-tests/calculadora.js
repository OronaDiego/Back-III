class Calculadora{
    chekearValores(n1, n2){
        const verificacion1 =isNaN(n1);
        const verificacion2 =isNaN(n2);
        if(verificacion1 || verificacion2) return true;
        return false;
    }

    suma(n1,n2){
        if(this.chekearValores(n1,n2)) throw new Error('Los valores no son números');
        return n1 + n2
    }
    resta(n1,n2){
        if(this.chekearValores(n1,n2)) throw new Error('Los valores no son números');
        return n1 - n2
    }
}
export const calculadora = new Calculadora();
