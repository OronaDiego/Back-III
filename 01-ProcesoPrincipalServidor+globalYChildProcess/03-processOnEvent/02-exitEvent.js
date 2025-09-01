process.on('exit', (code)=>{
    console.log(`Exit ==> El proceso termino con codigo: ${code}`)
});
console.log('EJECUTANDO MI PROGRAMA');

process.exit(1)