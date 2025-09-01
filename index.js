console.log(process.cwd()); // Retorna directorio de la carpeta en donde estoy parado
console.log(process.pid); // id del proceso, cada vez que se ejecuta cambia porque el id lo genera el SO y es aleatorio
console.log(process.version); // devuelve version del proceso que en este caso es node, la version de node 
console.log(process.platform); // devuelve el Sistema Operativo
console.log(process.memoryUsage()); // devuelve un objeto con propuedades que hace referencia al uso de memoria del proceso


process.exit() // esto finaliza el proceso de forma correcta
process.exit() // todo lo que le pase como parametro distinto a cero le estamos pasando de forma explicita un error
// 1,5,9 generalmente se suelen usar esos numeros para errores de tipo error no controlado, valor invalido en el momento de le ejecucion
// todo debajo de esa linea no se va a ejecutar


