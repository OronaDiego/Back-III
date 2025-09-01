process.on('uncaughtExeption',(err)=>{
    console.log(`Uncaught Exeption: ${err.message}`);
    console.log(err.stack);
    process.exit(1);
});

const miFunc2 = ()=>{
    console.log('ejecutando algo...');
    throw new Error('Mensaje peronalizado del error');
};

miFunc2();